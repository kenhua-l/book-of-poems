import { Injectable } from '@angular/core';
import { Poem } from './poem';
import { POEMS } from './mock-poems';
@Injectable({
  providedIn: 'root'
})
export class PoemService {

  constructor() { }

  getPoems(): Poem[] {
    return POEMS;
  }
}
