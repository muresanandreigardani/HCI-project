import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricaJocComponent } from './africa-joc.component';

describe('AfricaJocComponent', () => {
  let component: AfricaJocComponent;
  let fixture: ComponentFixture<AfricaJocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfricaJocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfricaJocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
