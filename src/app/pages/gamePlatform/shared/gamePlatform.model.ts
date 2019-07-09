import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import { Platform } from '../../platforms/shared/platform.model';

export class GamePlatform extends BaseResourceModel {

  constructor(
    public gameId?: number,
    public platformId?: string
  ) {
    super();
  }

  static fromJson(jsonData: any): GamePlatform {
    return Object.assign(new GamePlatform(), jsonData);
  }
}