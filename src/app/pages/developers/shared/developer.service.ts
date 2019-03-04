import { Injectable, Injector } from '@angular/core';
import { Developer } from './developer.model';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService extends BaseResourceService<Developer> {

  constructor(protected injector: Injector) {
    super("api/developers", injector, Developer.fromJson);
  }
  
}
