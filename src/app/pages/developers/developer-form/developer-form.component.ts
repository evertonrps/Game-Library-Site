import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Developer } from '../shared/developer.model';
import { DeveloperService } from '../shared/developer.service';

import { defineLocale, listLocales } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
defineLocale('pt-br', ptBrLocale); 

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent extends BaseResourceFormComponent<Developer> {
  
  constructor(protected developerService: DeveloperService, protected injector: Injector,
    private localeService: BsLocaleService) {
    super(injector, new Developer(), developerService, Developer.fromJson)    
  }

  ngOnInit()
  {
    this.localeService.use('pt-br');
    super.ngOnInit();
  }
  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [0],
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      founded: ['', [Validators.required]],
      webSite:''
    });
  }

  protected creationPageTitle(): string {
    return "Cadastro de Nova Desenvolvedora";
  }

  protected editionPageTitle(): string {
    const desenvolvedorName = this.resource.name || "";
    return "Editando Desenvolvedora: " + desenvolvedorName;
  }
}
