import { Injectable, Injector } from '@angular/core';
import { Platform } from './platform.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class PlatformService extends BaseResourceService<Platform> {

  constructor(protected injector: Injector) {
    super("api/platform", injector, Platform.fromJson);
  }
}
