import { Component, OnInit } from '@angular/core';
import { DeveloperService } from 'src/app/services/developer.service';
import { Developer } from '../Models/developer';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.css']
})
export class ListDevelopersComponent implements OnInit {
  public developers: Developer[];
  errorMessage: string;
  constructor(public service: DeveloperService,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.obterTodos()
    .subscribe(developers => this.developers = developers,
    error => this.errorMessage);
  }

}
