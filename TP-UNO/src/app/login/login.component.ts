import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbDropdownConfig]
})
export class LoginComponent {

  
  name:String;
  notlogged:boolean;

  constructor(config: NgbDropdownConfig) {
    config.autoClose = false;
    this.name = ``
    this.notlogged=true;
   }
   
  clicked(a: String):void{
    this.name=a;
    this.notlogged=false;
  }
  logout():void{
    this.notlogged=true;
  }


}
