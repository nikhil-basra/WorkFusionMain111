import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeleaverequestsComponent } from './employeeleaverequests.component';

describe('EmployeeleaverequestsComponent', () => {
  let component: EmployeeleaverequestsComponent;
  let fixture: ComponentFixture<EmployeeleaverequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeleaverequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeleaverequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
