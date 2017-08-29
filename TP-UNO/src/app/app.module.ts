import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }