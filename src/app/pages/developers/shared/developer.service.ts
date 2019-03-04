import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Developer } from './developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService extends BaseResourceService<Developer> {

  constructor(protected injector: Injector) {
    super("api/developers", injector, Developer.fromJson);
  }
  
}
