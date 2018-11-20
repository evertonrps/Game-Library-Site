import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { Developer } from '../Models/developer';

//Versao 4
// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/observable/merge';

//Versao 6
import { Observable, of, Subject, Subscription, merge,fromEvent, from, observable  } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GenericValidator } from 'src/app/common/validation/generic-form-validator';
import { DeveloperService } from 'src/app/services/developer.service';
import { Router } from '@angular/router';
import { ToastrService, Toast } from 'ngx-toastr';



@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  //variables
  private genericValidator: GenericValidator;
  private validationMessages: { [key: string]: { [key: string]: string } };
  developerForm : FormGroup;
  displayMessage: { [key: string]: string } = {};

  public errors: any[] = [];
  public developer : Developer;


  constructor(private fb: FormBuilder, private developerService: DeveloperService,
    private router: Router,public toastr: ToastrService) { 
    this.validationMessages = {
      name: {
        required: 'O Nome é requerido.',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      founded: {
        required: 'Informe a data de fundação',
        pattern : 'Data Inválida'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {

    //validation
    this.developerForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      founded: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}')]],
      webSite:''
    })
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

      //Trigger
    merge(...controlBlurs).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.developerForm);
    });
  }

  addDeveloper()
  {
    if(this.developerForm.dirty && this.developerForm.valid)
      {
        //mapeamento
        let o = Object.assign({}, this.developer, this.developerForm.value)
        //o.founded = "2018/01/01";

        this.developerService.adicionarDeveloper(o)
        .subscribe(
        result => { this.onSaveComplete() },
        error => {
          this.onError(error);
        });
      }
  }
  onError(error) {
    this.toastr.error('Falha ao inserir', 'Ops! :(');    
    this.errors = JSON.parse(error._body).errors;
  }
  onSaveComplete(): void {    
    this.developerForm.reset();
    this.errors = [];
    let tsrConfig ={
      autoDismiss : true,
    }
    this.toastr.success('Developer Registrado com Sucesso!', 'Oba :D');
  }

  //   this.toastr.success('Developer Registrado com Sucesso!', 'Oba :D', { autoDismiss: 'controlled' })
  //   .then((toast: Toast) => {
  //     setTimeout(() => {
  //       // this.toastr.dismissToast(toast);
  //       this.router.navigate(['/games']);
  //     }, 2500);
  //   });
  // }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
