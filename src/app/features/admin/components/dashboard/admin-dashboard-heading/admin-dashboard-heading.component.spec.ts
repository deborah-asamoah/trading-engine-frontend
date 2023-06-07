import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardHeadingComponent } from './admin-dashboard-heading.component';

describe('AdminDashboardHeadingComponent', () => {
  let component: AdminDashboardHeadingComponent;
  let fixture: ComponentFixture<AdminDashboardHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardHeadingComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
