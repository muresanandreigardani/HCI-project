import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropaJocComponent } from './europa-joc.component';

describe('EuropaJocComponent', () => {
  let component: EuropaJocComponent;
  let fixture: ComponentFixture<EuropaJocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuropaJocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuropaJocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
