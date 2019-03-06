import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { PlatformType } from './platformType.model';

@Injectable({
  providedIn: 'root'
})
export class PlatformTypeService extends BaseResourceService<PlatformType> {

  constructor(protected injector: Injector) {
    super("api/platformTypes", injector, PlatformType.fromJson);
  }
}
