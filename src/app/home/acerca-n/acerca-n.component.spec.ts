import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaNComponent } from './acerca-n.component';

describe('AcercaNComponent', () => {
  let component: AcercaNComponent;
  let fixture: ComponentFixture<AcercaNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
