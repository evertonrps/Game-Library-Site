import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Developer extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public founded?: string,
        public webSite?: string,
        public message?:string,
        public statusCode?: number) {
        super();
    }

    static fromJson(jsonData: any): Developer {
        return Object.assign(new Developer(), jsonData);
      }
}

// item:[{
//     id: number;
//     name:string;
//     founded: string;
//     webSite: string;}];
//     message:string;
//     statusCode: number;