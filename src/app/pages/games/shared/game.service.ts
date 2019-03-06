import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService extends BaseResourceService<Game> {

  constructor(protected injector: Injector) {
    super("api/developers", injector, Game.fromJson);
  }
}
