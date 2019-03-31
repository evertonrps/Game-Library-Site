import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CheckboxItem } from '../CheckboxItem';
import { PlatformService } from 'src/app/pages/platforms/shared/platform.service';
import { Platform } from 'src/app/pages/platforms/shared/platform.model';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {
 // public platforms :Array<Platform>;
  platforms = new Array<CheckboxItem>();

  @Input() exibirPlataforma : number; 
  
 // @Input() options = Array<CheckboxItem>();
  @Input() selectedValues: string[];
  @Output() toggle = new EventEmitter<any[]>();

  constructor(private platformSevice: PlatformService) { }

  ngOnInit() {       
    this.platformSevice.getAll().subscribe(
      platforms => this.platforms = platforms.map(x=> new         
        CheckboxItem(x.id, x.description,x.platformTypeId)));
  }

  onToggle() {
    const checkedOptions = this.platforms.filter(x => x.checked);
    this.selectedValues = checkedOptions.map(x => x.value);
    this.toggle.emit(checkedOptions.map(x => x.value));
   }

}
