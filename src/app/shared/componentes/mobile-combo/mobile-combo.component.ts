import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-mobile-combo',
  templateUrl: './mobile-combo.component.html',
  styleUrls: ['./mobile-combo.component.css']
})
export class MobileComboComponent implements OnInit {

  mIos : boolean = false;
  mAndroid: boolean = false;
  constructor() { }

  @Output() mudouItem = new EventEmitter(); 

  ngOnInit() {
  }

  mudouIos(event: any)
  {
    this.mIos = event;
    console.log("mIOs " + this.mIos);
    this.mudouItem.emit({IOS: this.mIos, Android: this.mAndroid});
  }
  mudouAndroid(event: any)
  {
    this.mAndroid = event;
    console.log("Android " + this.mAndroid);
    this.mudouItem.emit({IOS: this.mAndroid, Android: this.mAndroid});
  }
}
