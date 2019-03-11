import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassgeComponent } from './massge.component';

describe('MassgeComponent', () => {
  let component: MassgeComponent;
  let fixture: ComponentFixture<MassgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
