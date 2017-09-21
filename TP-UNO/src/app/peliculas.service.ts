/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Pelicula } from './pelicula';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeliculasService {

     // Resolve HTTP using the constructor
     constructor (private http: Http) {}

     // private instance variable to hold base url
     private peliculasUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=b57c97dcd5c10ae95c73f12d1b5c3373&language=en-US&page=1';
     private peliculaUrl = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=b57c97dcd5c10ae95c73f12d1b5c3373&language=en-US';
     
     
     // Fetch all existing movies
     getPelis() : Observable<any> {
               // ...using get request
               return this.http.get(this.peliculasUrl)
                              // ...and calling .json() on the response to return data
                               .map((res:Response) => res.json()) 
                               //...errors if any
                               .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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