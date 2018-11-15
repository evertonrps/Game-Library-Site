import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
  clickMessage = '';
  status: boolean = false;
  onClickMe() {
    this.status = !this.status;   
    // this.clickMessage = 'You are my hero!';
  }
  constructor() { }

  public isCollapsed: boolean = true;
  
  
  ngOnInit() {
  }

}
