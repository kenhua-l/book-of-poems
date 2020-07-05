import { Component, OnInit } from '@angular/core';
import { Poem } from '../poem';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PoemService } from '../poem.service';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {
  poem: Poem;

  constructor(
    private route: ActivatedRoute,
    private poemService: PoemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPoem();
  }

  getPoem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.poemService.getPoem(id)
        .subscribe(poem => this.poem = poem);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.poemService.updatePoem(this.poem)
        .subscribe(() => this.goBack());
  }

}
