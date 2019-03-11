import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousExComponent } from './previous-ex.component';

describe('PreviousExComponent', () => {
  let component: PreviousExComponent;
  let fixture: ComponentFixture<PreviousExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
