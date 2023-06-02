import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOpenOrdersComponent } from './dashboard-open-orders.component';

describe('DashboardOpenOrdersComponent', () => {
  let component: DashboardOpenOrdersComponent;
  let fixture: ComponentFixture<DashboardOpenOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardOpenOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardOpenOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
