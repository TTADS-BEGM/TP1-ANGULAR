import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    DetallesPeliculaComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }