import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.css']
})
export class DetallesPeliculaComponent {
  pelicula: any;
  credits: any;
  result: any;
  session: any;
  reviews: any;
  trailer: any;
  youtubeurl : any;
  havetrailer  = false;;
  
  constructor (private http: Http,
    private route: ActivatedRoute,
    private peliService : PeliculasService,
  private sanitizer: DomSanitizer) {}
   
    onChange(starsCount) {
      this.route.params.subscribe(params => {
        this.peliService.rateMovie(params['id'], starsCount, this.session.guest_session_id)
        .subscribe(
            result => this.result = result, //Bind to view
             err => {
                 // Log errors if any
                 console.log(err);
             });
      });
    }

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

    this.route.params.subscribe(params => {
      this.peliService.getCredits(params['id'])
      .subscribe(
          credits => this.credits = credits, //Bind to view
           err => {
               // Log errors if any
               console.log(err);
           });
    });
      this.peliService.getSession()
      .subscribe(
          session => this.session = session, //Bind to view
           err => {
               // Log errors if any
               console.log(err);
           });

    this.route.params.subscribe(params => {
      this.peliService.getReviews(params['id'])
      .subscribe(
          reviews => this.reviews = reviews, //Bind to view
           err => {
               // Log errors if any
               console.log(err);
           });
    });

       this.route.params.subscribe(params => {
      this.peliService.getTrailer(params['id'])
      .subscribe(
          trailer => this.trailer = trailer, //Bind to view
           err => {
               // Log errors if any
               console.log(err);
           });
    });
    
    
    
    


  }

  ngAfterContentChecked() {

      if(!this.havetrailer){
        this.youtubeurl = this.sanitizeAndEmbedURLs(this.trailer.results[0].key);
        this.havetrailer=true;
      }
    
  }
  private sanitizeAndEmbedURLs (id) {
    let link;    
    if (id !== null) {
    link = 'https://www.youtube.com/embed/' +id;
    }
    link = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    return link;
    }
      

}
