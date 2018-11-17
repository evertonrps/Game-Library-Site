import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef, ViewContainerRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { Game } from '../Models/Game';

import { Observable, of, Subject, Subscription, merge,fromEvent, from  } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GenericValidator } from 'src/app/common/validation/generic-form-validator';



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
  
  public erros: any[] = [];
  public game: Game;

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      title: {
        required: 'O Título é requerido.',
        minlength: 'O Título precisa ter no mínimo 2 caracteres',
        maxlength: 'O Título precisa ter no máximo 150 caracteres'
      },
      description:{
        maxlength: 'O Título precisa ter no máximo 500 caracteres'
      },
      developerId: {
        required: 'Informe a produtora'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
   }

  ngOnInit() {
    this.gameForm = this.fb.group({
      title:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],      
      description: ['', Validators.maxLength(500)],
      developerId:['', [Validators.required]]
    })
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
    }
  }
}
