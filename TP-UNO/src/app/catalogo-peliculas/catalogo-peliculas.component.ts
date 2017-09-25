import { Component, OnInit, Input,OnChanges,SimpleChanges } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent implements OnInit {
  // Local properties
  @Input() filtro: string;
  peliculas: any[];
  page = 1;

  // Constructor with injected service
  constructor(private peliculaService: PeliculasService) {}

  ngOnChanges(changes: SimpleChanges) {
    if(this.filtro == null){
      this.loadPeliculas()
    }else{
      this.page=1;      
      this.loadFiltradas();      
    }
  }
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
  loadFiltradas(){
    this.peliculaService.getFiltradas(this.page,this.filtro)
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
    if(this.filtro == null){
      this.loadPeliculas();
    }else{
      this.loadFiltradas();
    }
    
    window.scrollTo(0,300);
  }
  rePage($event){
    if(this.page>1){
      this.page--;
      var target = $event.target;    
      target.blur();
      if(this.filtro == null){
        this.loadPeliculas();
      }else{
        this.loadFiltradas();
      }
      window.scrollTo(0,300);
    }    
  }


}