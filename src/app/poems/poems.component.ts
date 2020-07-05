import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';
import { PoemService } from '../poem.service';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {
  poems: Poem[];
  selectedPoem: Poem;

  constructor(private poemService: PoemService) { }

  getPoems(): void {
    this.poems = this.poemService.getPoems();
  }

  ngOnInit(): void {
    this.getPoems();
    this.selectedPoem = this.poems[0];
  }

  onSelect(poem: Poem): void {
    this.selectedPoem = poem;
  }
}
