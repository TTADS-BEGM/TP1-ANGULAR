import { Component, OnInit } from '@angular/core';

import { Pelicula } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css'],
  providers:[PeliculasService]
})
export class CatalogoPeliculasComponent implements OnInit {

  peliculas: Pelicula [];

  constructor(private peliService: PeliculasService) { }

  getPeliculas(): void {
    this.peliService.getPelis().then(peliculas => this.peliculas = peliculas);
  }

  ngOnInit(): void {
    this.getPeliculas();
    console.log(this.peliculas);
  }
}
