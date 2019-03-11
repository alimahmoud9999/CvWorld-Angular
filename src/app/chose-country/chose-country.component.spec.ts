import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoseCountryComponent } from './chose-country.component';

describe('ChoseCountryComponent', () => {
  let component: ChoseCountryComponent;
  let fixture: ComponentFixture<ChoseCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoseCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoseCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
