import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { FooterComponent } from './shared/footer/footer.component';
import { MenuSuperiorComponent } from './shared/menu-superior/menu-superior.component';
import { HomeComponent } from './home/home.component';
import { MainPrincipalComponent } from './shared/main-principal/main-principal.component';
import { ListGamesComponent } from './games/list-games/list-games.component';
import { FormularioComponent } from './formulario/formulario.component';

// bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//toastr
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AddDeveloperComponent } from './developer/add-developer/add-developer.component';
import { AddGameComponent } from './games/add-game/add-game.component';
import { DeveloperService } from './services/developer.service';
import { HttpModule } from '@angular/http';
import { ListDevelopersComponent } from './developer/list-developers/list-developers.component';
import { AuthService } from './services/auth.service';
import { GameService } from './services/game.service';
import { PlatformTypeService } from './services/platformType.service';
import { SliderComponent } from './shared/slider/slider.component';
import { FormularioDevComponent } from './developer/formulario-dev/formulario-dev.component';
import { MobileComboComponent } from './shared/componentes/mobile-combo/mobile-combo.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BaseModalComponent } from './shared/base-modal/base-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuSuperiorComponent,
    HomeComponent,
    MainPrincipalComponent,
    FormularioComponent,
    ListGamesComponent,
    AddDeveloperComponent,
    AddGameComponent,
    ListDevelopersComponent,
    SliderComponent,
    FormularioDevComponent,
    MobileComboComponent,
    BaseModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),    
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {
        timeOut: 3000,        
        preventDuplicates: true,
        autoDismiss : true,
        progressBar:true,
        positionClass: "toast-top-right"
      }
    ), // ToastrModule added
    RouterModule.forRoot(rootRouterConfig, {useHash: false})
  ],
  providers: [
    DeveloperService,
    GameService,
    PlatformTypeService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
