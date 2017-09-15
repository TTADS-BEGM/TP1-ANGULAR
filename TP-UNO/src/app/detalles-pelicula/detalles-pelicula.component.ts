import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent implements OnInit {
  pelicula: any;
  private peliculaUrl = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=b57c97dcd5c10ae95c73f12d1b5c3373&language=en-US';
  
  constructor (private http: Http,
    private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getPeli(params['id'])
      .subscribe(
          pelicula => this.pelicula = pelicula, //Bind to view
           err => {
               // Log errors if any
               console.log(err);
           });
    });

  }
      getPeli(id: any) : Observable<any> {
        // ...using get request
        return this.http.get(this.peliculaUrl.replace('{movie_id}', id))
                        // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json()) 
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    } 

}
