import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DeveloperFormComponent } from './developer-form/developer-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DeveloperFormComponent],
  imports: [
    SharedModule,
    DevelopersRoutingModule
  ]  
})
export class DevelopersModule { }
