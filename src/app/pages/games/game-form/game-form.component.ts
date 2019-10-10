import { Component, OnInit, Injector, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
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
import { switchMap } from 'rxjs/operators';
import { CheckboxItem } from 'src/app/shared/components/generic-checkbox/CheckboxItem';
import { PlatformService } from '../../platforms/shared/platform.service';



@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent extends BaseResourceFormComponent<Game> {

  developers: Array<Developer>;
  platformTypes: Array<PlatformType>;
  platforms = new Array<CheckboxItem>();
  //gamePlatforms : Array<number>;
  gamePlatforms: Array<GamePlatform>;
  console: boolean = false;
  public mobile: boolean = false;
  public pc: boolean = false;
  public itemSelecionado: number;
  public plataformasSelecionadas: Array<GamePlatform>;
  exibirPlataforma: number;

  constructor(protected gameService: GameService, protected injector: Injector,
    protected developerService: DeveloperService,
    protected platformTypeService: PlatformTypeService,
    private platformSevice: PlatformService) {
    super(injector, new Game(), gameService, Game.fromJson)
  }

  ngOnInit() {
    this.loadPlatforms();
    this.loadDevelopers();
    this.loadPlatformTypes();
    super.ngOnInit();

  }

  protected loadPlatforms() {
    this.platformSevice.getAll().subscribe((platforms) => {
      this.platforms = platforms.map(x => new
        CheckboxItem(x.id, x.description, x.platformTypeId))

        if (this.currentAction == 'edit') {
          this.gamePlatforms.forEach(element => {            
            this.platforms.filter(x=> x.value == element.platformId)[0].checked = true;
          });
        }
    });
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [0],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      description: ['', Validators.maxLength(500)],
      developerId: ['', [Validators.required]],
      platformTypeId: [0, [Validators.required]],
      gamePlatform: ['', []]
    })
  }

  protected loadResource() {
    if (this.currentAction == "edit") {

      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get("id")))
      )
        .subscribe(
          (resource) => {
            this.resource = resource;
            this.resourceForm.patchValue(resource) // binds loaded resource data to resourceForm   
            this.exibirPlataforma = resource.platformTypeId;
            this.gamePlatforms = resource.gamePlatform;
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        )
    }
  }

  protected creationPageTitle(): string {
    return "Cadastro de Novo Jogo";
  }

  protected editionPageTitle(): string {
    const desenvolvedorName = this.resource.title || "";
    return "Editando Jogo: " + desenvolvedorName;
  }

  submitForm() {

    super.submitForm();
  }

  getValor(event: any) {

    //limpar itens marcados
    this.platforms.forEach((e) => { e.checked = false });

    this.console = false;
    this.mobile = false;
    this.pc = false;
    if (event.target.value == 1) {
      this.console = true;
    }
    if (event.target.value == 2) {
      this.pc = true;
    }
    if (event.target.value == 3) {
      this.mobile = true;
    }
    // this.itemSelecionado = event.target.value;
    // this.plataformasSelecionadas = event.target.value;
    this.exibirPlataforma = event.target.value;
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

  openModalWithComponent() { }

  // onRolesChange(value) {
  // //  this.userModel.roles = value;
  //   this.gamePlatforms = value;
  //   this.resourceForm.get('gamePlatform').setValue(value);
  //   console.log('Selecionados:' , this.gamePlatforms);
  //  }

  onRolesChange(event: any) {
    //  this.userModel.roles = value;
    this.gamePlatforms = event.target.value;
    this.resourceForm.get('gamePlatform').setValue(event.target.value);
    console.log('Selecionados:', this.gamePlatforms);
  }

  onToggle() {
    const checkedOptions = this.platforms.filter(x => x.checked);
    this.gamePlatforms = checkedOptions.map(x => new GamePlatform(0, x.value));
    this.resourceForm.get('gamePlatform').setValue(this.gamePlatforms);
  }
}

