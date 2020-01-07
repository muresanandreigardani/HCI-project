import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericaNordCuriozitatiComponent } from './america-nord-curiozitati.component';

describe('AmericaNordCuriozitatiComponent', () => {
  let component: AmericaNordCuriozitatiComponent;
  let fixture: ComponentFixture<AmericaNordCuriozitatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaNordCuriozitatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericaNordCuriozitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
