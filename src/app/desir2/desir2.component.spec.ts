import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Desir2Component } from './desir2.component';

describe('Desir2Component', () => {
  let component: Desir2Component;
  let fixture: ComponentFixture<Desir2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Desir2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Desir2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
