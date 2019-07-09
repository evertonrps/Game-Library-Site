import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PlatformService } from 'src/app/pages/platforms/shared/platform.service';
import { GamePlatform } from 'src/app/pages/gamePlatform/shared/gamePlatform.model';
import { CheckboxItem } from '../generic-checkbox/CheckboxItem';

@Component({
  selector: 'app-gameplatform-checkbox',
  templateUrl: './game-platform-checkbox.component.html',
  styleUrls: ['./game-platform-checkbox.component.css']
})
export class GamePlatformCheckboxComponent implements OnInit {

   platforms = new Array<CheckboxItem>();

   @Input() exibirPlataforma : number; 
   
   @Input() selectedValues: GamePlatform[];
   @Output() toggle = new EventEmitter<GamePlatform[]>();
  constructor(private platformSevice: PlatformService) { }

  ngOnInit() {       

    this.platformSevice.getAll().subscribe(
      platforms => this.platforms = platforms.map(x=> new         
        CheckboxItem(x.id, x.description,x.platformTypeId)));    
  }

  onToggle() {
    const checkedOptions = this.platforms.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => new GamePlatform(0, x.value));
    this.toggle.emit(checkedOptions.map(x => new GamePlatform(0, x.value)));

   }
}
