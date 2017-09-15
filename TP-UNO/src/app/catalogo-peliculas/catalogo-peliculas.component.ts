import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css'],
  providers:[PeliculasService]
})
export class CatalogoPeliculasComponent implements OnInit {
  // Local properties
  peliculas: Pelicula[];
  test = true;

  // Constructor with injected service
  constructor(private peliculaService: PeliculasService) {}

  ngOnInit() {
          // Load comments
          this.loadPeliculas()
  }

  loadPeliculas() {
      // Get all comments
       this.peliculaService.getPelis()
                         .subscribe(
                             peliculas => this.peliculas = peliculas, //Bind to view
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
  }

//  ngOnChanges(changes:any) {
      // Listen to the 'list'emitted event so as populate the model
      // with the event payload
//     EmitterService.get(this.listId).subscribe((peliculas:Pelicula[]) => { this.loadPeliculas()});
//  } 

}