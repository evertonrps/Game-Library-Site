import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'developers', loadChildren: './pages/developers/developers.module#DevelopersModule' },
  { path: 'games', loadChildren: './pages/games/games.module#GamesModule' },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
