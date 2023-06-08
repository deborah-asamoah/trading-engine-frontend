import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusChipComponent } from './order-status-chip.component';

describe('OrderStatusChipComponent', () => {
  let component: OrderStatusChipComponent;
  let fixture: ComponentFixture<OrderStatusChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderStatusChipComponent]
    });
    fixture = TestBed.createComponent(OrderStatusChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
