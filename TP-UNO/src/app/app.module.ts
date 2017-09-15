import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { BarraFiltrosComponent } from './barra-filtros/barra-filtros.component';
import { CatalogoPeliculasComponent } from './catalogo-peliculas/catalogo-peliculas.component';
import { HttpModule }    from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbdTypeaheadHttp } from './search/typeahead-http';
import {MdSelectModule, MdCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    Angular2FontawesomeModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdSelectModule,
    MdCardModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'details/:id',
        component: DetallesPeliculaComponent
      },
      {
        path: '',
        redirectTo: '/principal',
        pathMatch: 'full'
      },
      {
        path: 'principal',
        component: PrincipalComponent
      }
    ])
    
  ],

  declarations: [               
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    DetallesPeliculaComponent,
    BarraFiltrosComponent,
    CatalogoPeliculasComponent,
    LogoComponent,
    LoginComponent,
    NgbdTypeaheadHttp
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }