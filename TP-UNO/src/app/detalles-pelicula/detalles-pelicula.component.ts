import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {
  pelicula: any;
  
  
  constructor (private http: Http,
    private route: ActivatedRoute,
    private peliService : PeliculasService) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.peliService.getPeli(params['id'])
      .subscribe(
          pelicula => this.pelicula = pelicula, //Bind to view
           err => {
               // Log errors if any
               console.log(err);
           });
    });

  }
      

}
