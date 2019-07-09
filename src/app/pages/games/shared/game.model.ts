import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Platform } from '../../platforms/shared/platform.model';
import { GamePlatform } from '../../gamePlatform/shared/gamePlatform.model';

export class Game extends BaseResourceModel {

  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public developerId?: number,
    public platformTypeId?: number,
    public gamePlatform?: Array<GamePlatform>
  ) {
    super();
  }

  static fromJson(jsonData: any): Game {
    return Object.assign(new Game(), jsonData);
  }
}