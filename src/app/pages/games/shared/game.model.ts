import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Game extends BaseResourceModel {

  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public developerId?: number,
    public platformTypeId?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Game {
    return Object.assign(new Game(), jsonData);
  }
}