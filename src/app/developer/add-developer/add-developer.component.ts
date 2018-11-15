import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { Developer } from '../Models/developer';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {
  
  //variables
  public erros: any[] = [];
  public developer : Developer;
  developerForm : FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };

constructor(private fb: FormBuilder) { }

  ngOnInit() {

    //validation
    this.developerForm = this.fb.group({
      name:['', [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(150)]],
      founded:'',
      webSite:''
    })
  }

  addDeveloper()
  {
    if(this.developerForm.dirty && this.developerForm.valid)
      {
        //mapeamento
        let o = Object.assign({}, this.developer, this.developerForm.value)
      }
  }

}
