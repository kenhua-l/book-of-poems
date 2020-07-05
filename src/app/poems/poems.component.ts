import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';
import { POEMS } from '../mock-poems';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {
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
