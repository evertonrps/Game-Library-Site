import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class PlatformType extends BaseResourceModel {
    constructor(
        public id?: number,
        public description?: string
    ) { super(); }

    
  static fromJson(jsonData: any): PlatformType {
    return Object.assign(new PlatformType(), jsonData);
  }
}