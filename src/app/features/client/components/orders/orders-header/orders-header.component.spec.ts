import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHeaderComponent } from './orders-header.component';

describe('OrdersHeaderComponent', () => {
  let component: OrdersHeaderComponent;
  let fixture: ComponentFixture<OrdersHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersHeaderComponent]
    });
    fixture = TestBed.createComponent(OrdersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
