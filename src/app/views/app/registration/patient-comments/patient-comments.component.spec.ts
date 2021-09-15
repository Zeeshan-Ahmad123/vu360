import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCommentsComponent } from './patient-comments.component';

describe('AlertsRemindersComponent', () => {
  let component: PatientCommentsComponent;
  let fixture: ComponentFixture<PatientCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
