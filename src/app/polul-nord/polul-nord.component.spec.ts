import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolulNordComponent } from './polul-nord.component';

describe('PolulNordComponent', () => {
  let component: PolulNordComponent;
  let fixture: ComponentFixture<PolulNordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolulNordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolulNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
