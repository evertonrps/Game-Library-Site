import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListGamesComponent } from './games/list-games/list-games.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AddDeveloperComponent } from './developer/add-developer/add-developer.component';
import { AddGameComponent } from './games/add-game/add-game.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'list-games', component: ListGamesComponent },
    {path: 'formulario', component: FormularioComponent },
    {path: 'add-developer', component: AddDeveloperComponent },
    {path: 'add-game', component: AddGameComponent }
]