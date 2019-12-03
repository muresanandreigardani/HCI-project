import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmercaDeNordComponent } from './amerca-de-nord.component';

describe('AmercaDeNordComponent', () => {
  let component: AmercaDeNordComponent;
  let fixture: ComponentFixture<AmercaDeNordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmercaDeNordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmercaDeNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
