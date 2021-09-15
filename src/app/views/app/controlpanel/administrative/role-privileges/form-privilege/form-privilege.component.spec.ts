import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrivilegeComponent } from './form-privilege.component';

describe('FormPrivilegeComponent', () => {
  let component: FormPrivilegeComponent;
  let fixture: ComponentFixture<FormPrivilegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPrivilegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPrivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
