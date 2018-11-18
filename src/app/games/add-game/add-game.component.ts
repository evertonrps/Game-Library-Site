import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { Game } from '../Models/Game';

import { Observable, of, Subject, Subscription, merge,fromEvent, from  } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GenericValidator } from 'src/app/common/validation/generic-form-validator';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from 'src/app/developer/Models/developer';
import { ToastrService } from 'ngx-toastr';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';



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
  errorMessage: string;
  public myRetorno : string;

  constructor(private fb: FormBuilder, private gameService: GameService,
    public developerService: DeveloperService, private router: Router,
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
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit() {

    this.gameForm = this.fb.group({
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],      
      description: ['', Validators.maxLength(500)]
      ,developerId:['', [Validators.required]]
    })

    this.developerService.obterTodos()
    .subscribe(developers => this.developers = developers,
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
