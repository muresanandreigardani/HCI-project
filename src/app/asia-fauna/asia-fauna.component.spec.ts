import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaFaunaComponent } from './asia-fauna.component';

describe('AsiaFaunaComponent', () => {
  let component: AsiaFaunaComponent;
  let fixture: ComponentFixture<AsiaFaunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaFaunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaFaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
