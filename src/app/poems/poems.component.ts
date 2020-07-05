import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';
import { POEMS } from '../mock-poems';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {
  // poem = 'Romance';
  // poem: Poem = {
  //   id: 1,
  //   name: 'Romance',
  //   content: 'The weather must be good in your city these days\n' +
  //           'Because you are such a sunshine'
  // }
  poems = POEMS;
  selectedPoem: Poem;

  constructor() { }

  ngOnInit(): void {
    this.selectedPoem = this.poems[0];
  }

  onSelect(poem: Poem): void {
    this.selectedPoem = poem;
  }
}
