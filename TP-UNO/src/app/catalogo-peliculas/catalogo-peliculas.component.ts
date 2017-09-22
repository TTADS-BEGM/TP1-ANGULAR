import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula';
import { PeliculasService } from '../peliculas.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent implements OnInit {
  // Local properties
  peliculas: Pelicula[];
  page = 1;

  // Constructor with injected service
  constructor(private peliculaService: PeliculasService) {}

  ngOnInit() {
          // Load comments
          this.loadPeliculas()
  }

  loadPeliculas() {
      // Get all comments
       this.peliculaService.getPelis(this.page)
                         .subscribe(
                             peliculas => this.peliculas = peliculas, //Bind to view
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
  }
  avPage($event){
    this.page++;
    var target = $event.target;    
    target.blur();
    this.loadPeliculas();
    window.scrollTo(0,300);
  }
  rePage($event){
    if(this.page>1){
      this.page--;
      var target = $event.target;    
      target.blur();
      this.loadPeliculas();
      window.scrollTo(0,300);
    }    
  }

//  ngOnChanges(changes:any) {
      // Listen to the 'list'emitted event so as populate the model
      // with the event payload
//     EmitterService.get(this.listId).subscribe((peliculas:Pelicula[]) => { this.loadPeliculas()});
//  } 

}