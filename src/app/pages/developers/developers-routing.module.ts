import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeveloperFormComponent } from './developer-form/developer-form.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';

const routes: Routes = [
  {path: '', component: DeveloperListComponent},
  {path:'new', component: DeveloperFormComponent},
  {path: 'edit/:id', component: DeveloperFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule { }
