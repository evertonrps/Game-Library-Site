import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DeveloperFormComponent } from './developer-form/developer-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeveloperListComponent } from './developer-list/developer-list.component';

@NgModule({
  declarations: [DeveloperFormComponent, DeveloperListComponent],
  imports: [
    SharedModule,
    DevelopersRoutingModule
  ]  
})
export class DevelopersModule { }
