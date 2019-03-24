import { Component, OnInit, Input } from '@angular/core';
import { PlatformService } from 'src/app/pages/platforms/shared/platform.service';
import { Platform } from 'src/app/pages/platforms/shared/platform.model';
import { log } from 'util';

@Component({
  selector: 'app-platform-checkbox',
  templateUrl: './platform-checkbox.component.html',
  styleUrls: ['./platform-checkbox.component.css']
})
export class PlatformCheckboxComponent implements OnInit {

  public platforms :Array<Platform>;
  public console : boolean = false;
  public mobile: boolean = false;

  @Input() exibirPlataforma : number; 

  constructor(private platformSevice: PlatformService) { }

  ngOnInit() {       
    this.platformSevice.getAll().subscribe(
      platforms => this.platforms = platforms);

  }
}
