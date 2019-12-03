import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaFloraComponent } from './australia-flora.component';

describe('AustraliaFloraComponent', () => {
  let component: AustraliaFloraComponent;
  let fixture: ComponentFixture<AustraliaFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
