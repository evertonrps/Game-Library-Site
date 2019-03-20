import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GameFormComponent, GameListComponent],
  imports: [
    SharedModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
