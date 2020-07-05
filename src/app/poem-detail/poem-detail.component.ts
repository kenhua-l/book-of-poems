import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Poem } from '../poem';
import { PoemService } from '../poem.service';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {
  @Input() poem: Poem;

  constructor(
    private route: ActivatedRoute,
    private poemService: PoemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPoem();
  }

  /* RETRIEVE */
  getPoem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.poemService.getPoem(id)
        .subscribe(poem => this.poem = poem);
  }

  /* UTIL */
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.poemService.updatePoem(this.poem)
        .subscribe(() => this.goBack());
  }

}
