import { Injectable } from '@angular/core';

import { Pelicula } from './pelicula';

@Injectable()
export class PeliculasService {
  getPelis(): Promise<Pelicula[]> {
    return Promise.resolve(PELICULAS);
  }

}

export const PELICULAS: Pelicula[] = [
  { id: 11, name: 'El secreto de sus ojos' },
  { id: 12, name: 'Narcos' },
  { id: 13, name: 'Harry Potter 4' },
  { id: 14, name: 'Ex Machina' },
  { id: 15, name: 'Mad Max' },
  { id: 16, name: 'Deadpool' },
  { id: 17, name: 'Contratiempo' },
  { id: 18, name: 'El planeta de los simios' },
  { id: 19, name: 'Newells' },
  { id: 20, name: 'Death Note' }
];