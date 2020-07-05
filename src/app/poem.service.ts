import { Injectable } from '@angular/core';
import { Poem } from './poem';
import { POEMS } from './mock-poems';
import { Observable,  of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PoemService {
  private poemsUrl = 'api/poems';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getPoems(): Observable<Poem[]> {
    return this.http.get<Poem[]>(this.poemsUrl)
               .pipe(
                 tap(_ => this.log('fetched poems')),
                 catchError(this.handleError<Poem[]>('getPoems', []))
               );
  }

  getPoem(id: number): Observable<Poem> {
    const url = `${this.poemsUrl}/${id}`;
    return this.http.get<Poem>(url).pipe(
      tap(_ => this.log(`fetched poem ${id}`)),
      catchError(this.handleError<Poem>(`getPoem ${id}`))
    );
  }

  updatePoem(poem: Poem): Observable<any> {
    return this.http.put(this.poemsUrl, poem, this.httpOptions)
               .pipe(
                 tap(_ => this.log(`updated poem ${poem.id}`)),
                 catchError(this.handleError<any>('updatePoem'))
               );
  }

  private log(message: string) {
    this.messageService.add(`PoemService: ${message}`);
  }

  private handleError<T>(operation = 'opetaion', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
