import { Injectable } from '@angular/core';

import { Pelicula } from './pelicula';

@Injectable()
export class PeliculasService {
  getPelis(): Promise<Pelicula[]> {
    return Promise.resolve(PELICULAS);
  }

}

export const PELICULAS: Pelicula[] = [
  { id: 11, name: 'El secreto de sus ojos', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 12, name: 'Narcos', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 13, name: 'Harry Potter 4', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 14, name: 'Ex Machina', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 15, name: 'Mad Max', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 16, name: 'Deadpool', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 17, name: 'Contratiempo', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 18, name: 'El planeta de los simios', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 19, name: 'Newells', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' },
  { id: 20, name: 'Death Note', url: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bRl6C6FwzTndk0MBGZZ68nRFlw3.jpg' }
];

