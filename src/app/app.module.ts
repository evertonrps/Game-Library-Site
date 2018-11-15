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

import { AppComponent } from './app.component';
import { AddDeveloperComponent } from './developer/add-developer/add-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuSuperiorComponent,
    HomeComponent,
    MainPrincipalComponent,
    FormularioComponent,
    ListGamesComponent,
    AddDeveloperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
