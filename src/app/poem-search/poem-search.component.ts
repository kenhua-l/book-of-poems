import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Poem } from '../poem';
import { PoemService } from '../poem.service';

@Component({
  selector: 'app-poem-search',
  templateUrl: './poem-search.component.html',
  styleUrls: ['./poem-search.component.scss']
})
export class PoemSearchComponent implements OnInit {
  poems$: Observable<Poem[]>;
  private searchTerms = new Subject<string>();

  constructor(private poemService: PoemService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.poems$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.poemService.searchPoems(term)),
    );
  }
}
