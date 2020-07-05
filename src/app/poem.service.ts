import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Poem } from './poem';
import { MessageService } from './message.service';

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

  /* RETRIEVE */
  getPoems(): Observable<Poem[]> {
    return this.http.get<Poem[]>(this.poemsUrl)
               .pipe(
                 tap(_ => this.log('fetched poems')),
                 catchError(this.handleError<Poem[]>('getPoems', []))
               );
  }

  getPoemNo404<Data>(id: number): Observable<Poem> {
    const url = `${this.poemsUrl}/?id=${id}`;
    return this.http.get<Poem[]>(url)
      .pipe(
        map(poems => poems[0]),
        tap(x => {
          const outcome = x ? 'fetched' : 'did not find';
          this.log(`${outcome} poem ${id}`);
        }),
        catchError(this.handleError<Poem>(`getPoem ${id}`))
      );
  }

  getPoem(id: number): Observable<Poem> {
    const url = `${this.poemsUrl}/${id}`;
    return this.http.get<Poem>(url).pipe(
      tap(_ => this.log(`fetched poem ${id}`)),
      catchError(this.handleError<Poem>(`getPoem ${id}`))
    );
  }

  searchPoems(term: string): Observable<Poem[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Poem[]>(`${this.poemsUrl}/?name=${term}`)
               .pipe(
                 tap(x => x.length ?
                   this.log(`found poems matching "${term}"`) :
                   this.log(`no poems matching "${term}"`)
                 ),
                 catchError(this.handleError<Poem[]>('searchPoems', []))
               );
  }

  /* CREATE */
  addPoem(poem: Poem): Observable<Poem> {
    return this.http.post<Poem>(this.poemsUrl, poem, this.httpOptions)
               .pipe(
                 tap((newPoem: Poem) => this.log(`added poem w/ id=${newPoem.id}`)),
                 catchError(this.handleError<Poem>('addPoem'))
               );
  }

  /* DELETE */
  deletePoem(poem: Poem | number): Observable<Poem> {
    const id = typeof poem === 'number' ? poem : poem.id;
    const url = `${this.poemsUrl}/${id}`;

    return this.http.delete<Poem>(url, this.httpOptions)
               .pipe(
                 tap(_ => this.log(`deleted poem ${id}`)),
                 catchError(this.handleError<Poem>('deletePoem'))
               );
  }

  /* UPDATE */
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
