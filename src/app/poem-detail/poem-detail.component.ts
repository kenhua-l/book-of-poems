import { Component, OnInit, Input } from '@angular/core';
import { Poem } from '../poem';

@Component({
  selector: 'app-poem-detail',
  templateUrl: './poem-detail.component.html',
  styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {
  @Input() poem: Poem;

  constructor() { }

  ngOnInit(): void {
  }

}
