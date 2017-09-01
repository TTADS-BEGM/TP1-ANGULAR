import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { BarraFiltrosComponent } from './barra-filtros/barra-filtros.component';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
  ],
  declarations: [               
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    DetallesPeliculaComponent,
    BarraFiltrosComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }