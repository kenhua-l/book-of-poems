import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemSearchComponent } from './poem-search.component';

describe('PoemSearchComponent', () => {
  let component: PoemSearchComponent;
  let fixture: ComponentFixture<PoemSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoemSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
