import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';
import { PoemService } from '../poem.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  poems: Poem[] = [];

  constructor(private poemService: PoemService) { }

  ngOnInit(): void {
    this.getPoems();
  }

  getPoems(): void {
    this.poemService.getPoems()
        .subscribe(poems => this.poems = poems.slice(1, 3));
  }

}
