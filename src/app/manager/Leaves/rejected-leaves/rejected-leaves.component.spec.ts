import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedLeavesComponent } from './rejected-leaves.component';

describe('RejectedLeavesComponent', () => {
  let component: RejectedLeavesComponent;
  let fixture: ComponentFixture<RejectedLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectedLeavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
