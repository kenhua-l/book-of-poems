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

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.poemService.addPoem({ name } as Poem)
        .subscribe(poem => {
          this.poems.push(poem);
        });
  }

  getPoems(): void {
    this.poemService.getPoems()
        .subscribe(poems => this.poems = poems);
  }

  delete(poem: Poem): void {
    this.poems = this.poems.filter(x => x !== poem);
    this.poemService.deletePoem(poem).subscribe();
  }

  ngOnInit(): void {
    this.getPoems();
  }
}
