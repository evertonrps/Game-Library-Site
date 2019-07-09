import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GamePlatformCheckboxComponent } from './components/game-platform-checkbox/game-platform-checkbox.component';
import { CheckboxGroupComponent } from './components/generic-checkbox/checkbox-group/checkbox-group.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  GamePlatformCheckboxComponent,
  CheckboxGroupComponent],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,

    // shared components
    GamePlatformCheckboxComponent,
    CheckboxGroupComponent,
  ]
})
export class SharedModule { }
