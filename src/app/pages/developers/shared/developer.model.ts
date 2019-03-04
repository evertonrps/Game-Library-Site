import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Developer extends BaseResourceModel {
    constructor(id?: number,
        name?: string,
        founded?: string,
        webSite?: string) {
        super();
    }

    static fromJson(jsonData: any): Developer {
        return Object.assign(new Developer(), jsonData);
      }
}