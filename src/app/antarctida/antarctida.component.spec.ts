import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntarctidaComponent } from './antarctida.component';

describe('AntarctidaComponent', () => {
  let component: AntarctidaComponent;
  let fixture: ComponentFixture<AntarctidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntarctidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntarctidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
