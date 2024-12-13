import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterLayoutComponent } from './outer-layout.component';

describe('OuterLayoutComponent', () => {
  let component: OuterLayoutComponent;
  let fixture: ComponentFixture<OuterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OuterLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
