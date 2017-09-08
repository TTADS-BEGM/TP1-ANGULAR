import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-filtros',
  templateUrl: './barra-filtros.component.html',
  styleUrls: ['./barra-filtros.component.css']
})
export class BarraFiltrosComponent implements OnInit {

    genres = [
      {idGenre: '1', descGenre: 'Aventura'},
      {idGenre: '2', descGenre: 'Acción'},
      {idGenre: '3', descGenre: 'Supenso'}
    ];
    
    years = [
      {idyear: '2017'},
      {idyear: '2016'},
      {idyear: '2015'}
    ];
    
    orderBys = [
      {idOrder: 'Popularity'},
      {idOrder: 'Starts'},
      {idOrder: 'Views'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
