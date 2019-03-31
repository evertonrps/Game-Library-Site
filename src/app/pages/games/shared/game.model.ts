import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Platform } from '../../platforms/shared/platform.model';

export class Game extends BaseResourceModel {

  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public developerId?: number,
    public platformTypeId?: number,
    public gamePlatform?: Array<Platform>
  ) {
    super();
  }

  static fromJson(jsonData: any): Game {
    return Object.assign(new Game(), jsonData);
  }
}