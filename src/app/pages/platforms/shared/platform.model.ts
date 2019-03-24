import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Platform extends BaseResourceModel {
    constructor(
        public id?: number,
        public description?: string,
        public platformTypeId?: number
    ) {
        super();
    }

    static fromJson(jsonData: any): Platform {
        return Object.assign(new Platform(), jsonData);
    }
}
