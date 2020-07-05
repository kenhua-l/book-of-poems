import { Injectable } from '@angular/core';
import { Poem } from './poem';
import { POEMS } from './mock-poems';
import { Observable,  of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PoemService {

  constructor() { }

  getPoems(): Observable<Poem[]> {
    return of(POEMS);
  }
}
