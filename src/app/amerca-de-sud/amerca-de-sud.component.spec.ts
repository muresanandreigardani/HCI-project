import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmercaDeSudComponent } from './amerca-de-sud.component';

describe('AmercaDeSudComponent', () => {
  let component: AmercaDeSudComponent;
  let fixture: ComponentFixture<AmercaDeSudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmercaDeSudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmercaDeSudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
