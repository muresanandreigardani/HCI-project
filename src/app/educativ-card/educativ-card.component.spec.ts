import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducativCardComponent } from './educativ-card.component';

describe('EducativCardComponent', () => {
  let component: EducativCardComponent;
  let fixture: ComponentFixture<EducativCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducativCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducativCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
