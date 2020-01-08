import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaJocComponent } from './asia-joc.component';

describe('AsiaJocComponent', () => {
  let component: AsiaJocComponent;
  let fixture: ComponentFixture<AsiaJocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaJocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaJocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
