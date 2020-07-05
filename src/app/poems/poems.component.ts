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

  constructor(private poemService: PoemService) { }

  getPoems(): void {
    this.poemService.getPoems()
        .subscribe(poems => this.poems = poems);
  }

  ngOnInit(): void {
    this.getPoems();
  }
}
