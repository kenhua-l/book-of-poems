import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.scss']
})
export class PoemsComponent implements OnInit {
  // poem = 'Romance';
  poem: Poem = {
    id: 1,
    name: 'Romance',
    content: 'The weather must be good in your city these days\n' +
            'Because you are such a sunshine'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
