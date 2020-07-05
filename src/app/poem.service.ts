import { Injectable } from '@angular/core';
import { Poem } from './poem';
import { POEMS } from './mock-poems';
import { Observable,  of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class PoemService {

  constructor(private messageService: MessageService) { }

  getPoems(): Observable<Poem[]> {
    this.messageService.add('PoemService: fetched poems');
    return of(POEMS);
  }
}
