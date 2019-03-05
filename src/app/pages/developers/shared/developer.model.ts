import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Developer extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public founded?: string,
        public webSite?: string) {
        super();
    }

    static fromJson(jsonData: any): Developer {
        return Object.assign(new Developer(), jsonData);
      }
}