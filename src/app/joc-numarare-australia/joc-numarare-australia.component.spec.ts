import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JocNumarareAustraliaComponent } from './joc-numarare-australia.component';

describe('JocNumarareAustraliaComponent', () => {
  let component: JocNumarareAustraliaComponent;
  let fixture: ComponentFixture<JocNumarareAustraliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JocNumarareAustraliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JocNumarareAustraliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
