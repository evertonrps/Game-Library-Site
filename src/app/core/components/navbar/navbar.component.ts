import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed: boolean = true;
  clickMessage = '';
  status: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }


  onClickMe() {
    this.status = !this.status;   
    // this.clickMessage = 'You are my hero!';
  }

}
