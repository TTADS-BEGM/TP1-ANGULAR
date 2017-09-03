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

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],

  declarations: [               
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    DetallesPeliculaComponent,
    BarraFiltrosComponent,
    CatalogoPeliculasComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }