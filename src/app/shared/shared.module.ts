import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlatformCheckboxComponent } from './components/platform-checkbox/platform-checkbox.component';
import { CheckboxGroupComponent } from './components/generic-checkbox/checkbox-group/checkbox-group.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  PlatformCheckboxComponent,
  CheckboxGroupComponent],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,

    // shared components
    PlatformCheckboxComponent,
    CheckboxGroupComponent,
  ]
})
export class SharedModule { }
