import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaSudCuriozitatiComponent } from './america-sud-curiozitati.component';

describe('AmericaSudCuriozitatiComponent', () => {
  let component: AmericaSudCuriozitatiComponent;
  let fixture: ComponentFixture<AmericaSudCuriozitatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaSudCuriozitatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaSudCuriozitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
