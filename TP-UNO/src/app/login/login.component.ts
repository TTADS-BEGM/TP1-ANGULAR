import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbDropdownConfig]
})
export class LoginComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.autoClose = false;
   }

  ngOnInit() {
  }

}
