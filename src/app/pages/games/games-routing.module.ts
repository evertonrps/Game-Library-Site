import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  {path: '', component: GameListComponent},  
  {path:'new', component: GameFormComponent},
  {path: 'edit/:id', component: GameFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
