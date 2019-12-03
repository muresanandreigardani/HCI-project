import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinenteleComponent } from './continentele.component';

describe('ContinenteleComponent', () => {
  let component: ContinenteleComponent;
  let fixture: ComponentFixture<ContinenteleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinenteleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinenteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
