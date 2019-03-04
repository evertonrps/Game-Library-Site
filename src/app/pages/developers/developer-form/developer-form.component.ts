import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Developer } from '../shared/developer.model';
import { DeveloperService } from '../shared/developer.service';

@Component({
  selector: 'app-developer-form',
  templateUrl: './developer-form.component.html',
  styleUrls: ['./developer-form.component.css']
})
export class DeveloperFormComponent extends BaseResourceFormComponent<Developer> {

  constructor(protected developerService: DeveloperService, protected injector: Injector) {
    super(injector, new Developer(), developerService, Developer.fromJson)
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [0],
      name:['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      founded: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}')]],
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
