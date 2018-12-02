import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, ValidatorFn, AbstractControl } from '@angular/forms';
import { Game } from '../Models/Game';

import { Observable, of, Subject, Subscription, merge,fromEvent, from  } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GenericValidator } from 'src/app/common/validation/generic-form-validator';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from 'src/app/developer/Models/developer';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';
import { PlatformTypeService } from 'src/app/services/platformType.service';
import { PlatformType } from 'src/app/PlatformType/Models/PlatformType';
import { ValidateUrl, ValidatePc } from 'src/app/validators/url.validator';

// const MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
//   const start = fg.get('Pc').value;
//   //const end = fg.get('rangeEnd').value;
//   //return start !== null && end !== null && start < end   ? null : { range: true };
//   return start == false  ? null : { range: true };
// };

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  private genericValidator: GenericValidator;
  private validationMessages: { [key: string]: { [key: string]: string } };
  gameForm : FormGroup;
  displayMessage: { [key: string]: string } = {};
  
  public errors: any[] = [];
  public game: Game;
  public developers: Developer[];
  public platformTypes: PlatformType[];
  errorMessage: string;
  public myRetorno : string;
  console:boolean = false;
  public mobile:boolean = false;


  constructor(private fb: FormBuilder, private gameService: GameService,
    public developerService: DeveloperService, public platformTypeService: PlatformTypeService, private router: Router,
    private toastr: ToastrService) 
    {
    this.validationMessages = {
      title: {
        required: 'O Título é requerido.',
        minlength: 'O Título precisa ter no mínimo 2 caracteres',
        maxlength: 'O Título precisa ter no máximo 150 caracteres'
      },
      description:{
        maxlength: 'O Título precisa ter no máximo 500 caracteres'
      }
      ,
      developerId: {
        required: 'Informe a produtora'
      },
      platformTypeId: {
        required: 'Informe a produtora'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit() {

    this.gameForm = this.fb.group({
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],      
      description: ['', Validators.maxLength(500)]
      ,developerId:['', [Validators.required]]
      ,platformTypeId:['', [Validators.required]]
      ,pc:['', [Validators.required, ValidatePc('pc')]]
    })

    this.developerService.obterTodos()
    .subscribe(developers => this.developers = developers,
    error => this.errorMessage);

    this.platformTypeService.obterTodos()
    .subscribe(platformTypes => this.platformTypes = platformTypes,
    error => this.errorMessage);
  }
  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

      //Trigger
    merge(...controlBlurs).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.gameForm);
    });
  }

  getValor(event: any)
  {
    if(event.target.value == 1)
    {
      this.console = true;
      this.mobile = false;
    }
    else
    {
      this.console = false;
      this.mobile = true;
    }
    console.log('Selected value is: ', event.target.value);
  }
  addGame()
  {    
    if(this.gameForm.dirty && this.gameForm.valid)
    {      
      //mapeamento
      let o = Object.assign({}, this.game, this.gameForm.value)
      // o.developerId = 2;

      this.gameService.adicionarGame(o)
      .subscribe(
      result => { this.onSaveComplete() },
      error => {
        this.onError(error);
      });
    }
    else
    {
      this.onError("Errok kkx");
    }
  }

  ValidateUrl(control: AbstractControl) {
    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
      return { validUrl: true };
    }
    return null;
  }

  // MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
  
  //   //const end = fg.get('rangeEnd').value;
  //   //return start !== null && end !== null && start < end   ? null : { range: true };
  //   return this.mobile == false  ? null : { range: true };
  // };
  

  onError(error) {
    this.toastr.error('Ocorreu um erro no processamento', 'Ops! :(');    
    this.errors = JSON.parse(error._body).errors;
  }
  onSaveComplete(): void {
    this.gameForm.reset();
    this.errors = [];
    let tsrConfig ={
      autoDismiss : true,
    }
    this.toastr.success('Game Registrado com Sucesso!', 'Victory :D');
  }
}
