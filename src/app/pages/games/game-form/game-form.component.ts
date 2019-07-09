import { Component, OnInit, Injector, Output, EventEmitter } from '@angular/core';
import { Validators, ValidatorFn, FormArray } from '@angular/forms';

import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

import { Game } from '../shared/game.model';
import { GameService } from '../shared/game.service';
import { PlatformType } from '../../platformType/shared/platformType.model';
import { PlatformTypeService } from '../../platformType/shared/platformType.service';
import { Developer } from '../../developers/shared/developer.model';
import { DeveloperService } from '../../developers/shared/developer.service';
import { isNgTemplate } from '@angular/compiler';
import { GamePlatform } from '../../gamePlatform/shared/gamePlatform.model';



@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent extends BaseResourceFormComponent<Game> {

  developers: Array<Developer>;
  platformTypes: Array<PlatformType>;
  //gamePlatforms : Array<number>;
  gamePlatforms : Array<GamePlatform>;
  console: boolean = false;
  public mobile: boolean = false;
  public itemSelecionado : number;
  public plataformasSelecionadas : Array<GamePlatform>;

  constructor(protected gameService: GameService, protected injector: Injector,
    protected developerService: DeveloperService,
    protected platformTypeService: PlatformTypeService) {
    super(injector, new Game(), gameService, Game.fromJson)
  }

  ngOnInit() {
    this.loadDevelopers();
    this.loadPlatformTypes();
    super.ngOnInit();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [0],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      description: ['', Validators.maxLength(500)],
      developerId: ['', [Validators.required]],
      platformTypeId: [0, [Validators.required]],
      gamePlatform:['',[]]
    })
  }
  

  protected creationPageTitle(): string {
    return "Cadastro de Novo Jogo";
  }

  protected editionPageTitle(): string {
    const desenvolvedorName = this.resource.title || "";
    return "Editando Jogo: " + desenvolvedorName; 
  }

  submitForm(){

    super.submitForm();
  }

  getValor(event: any) {
    if (event.target.value == 1) {
      this.console = true;
      this.mobile = false;
    }
    else {
      this.console = false;
      this.mobile = true;
    }
    this.itemSelecionado = event.target.value;
    this.plataformasSelecionadas = event.target.value;
    console.log('Selected value is: ', event.target.value);
  }

  loadDevelopers(): any {
    this.developerService.getAll().subscribe(
      developers => this.developers = developers
    );
  }

  loadPlatformTypes(): any {
    this.platformTypeService.getAll().subscribe(
      platforms => this.platformTypes = platforms
    );
  }

  openModalWithComponent()
  {}

  // onRolesChange(value) {
  // //  this.userModel.roles = value;
  //   this.gamePlatforms = value;
  //   this.resourceForm.get('gamePlatform').setValue(value);
  //   console.log('Selecionados:' , this.gamePlatforms);
  //  }

   onRolesChange(value) {
    //  this.userModel.roles = value;
      this.gamePlatforms = value;
      this.resourceForm.get('gamePlatform').setValue(value);
      console.log('Selecionados:' , this.gamePlatforms);
     }   
}

