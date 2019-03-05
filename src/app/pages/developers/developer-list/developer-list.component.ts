import { Component, OnInit } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Developer } from '../shared/developer.model';
import { DeveloperService } from '../shared/developer.service';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent extends BaseResourceListComponent<Developer> {

  constructor(private developerService : DeveloperService) {
    super(developerService);
  }
}
