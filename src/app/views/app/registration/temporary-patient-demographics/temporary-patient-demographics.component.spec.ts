import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryPatientDemographicsComponent } from './temporary-patient-demographics.component';

describe('TemporaryPatientDemographicsComponent', () => {
  let component: TemporaryPatientDemographicsComponent;
  let fixture: ComponentFixture<TemporaryPatientDemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporaryPatientDemographicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryPatientDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
