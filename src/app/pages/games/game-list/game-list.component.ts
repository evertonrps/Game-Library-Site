import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { GameService } from '../shared/game.service';
import { Game } from '../shared/game.model';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent extends BaseResourceListComponent<Game>  {

  constructor(private gameService: GameService) {
    super(gameService);
  }
}
