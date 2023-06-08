import { Component, OnInit } from '@angular/core';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast-service.service';
import FilterOptions from '../../../models/filter-options.model';
import { OrderSide, OrderType } from 'src/app/core/models/order.model';
import { OrderStatus } from 'src/app/core/models/order-status.enum';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  products: string[] = [
    'MSFT',
    'NFLX',
    'GOOGL',
    'AAPL',
    'TSLA',
    'IBM',
    'ORCL',
    'AMZN',
  ];
  orders: OrdersDto[] = [];
  filteredOrders: OrdersDto[] = [];
  selectedValues: FilterOptions = {};
  isLoading = true;
  boundOnReset = this.onReset.bind(this);

  constructor(
    private clientService: ClientDataService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.clientService.getOrders().subscribe({
      next: (result) => {
        this.orders = result.data;
        this.filteredOrders = this.orders;
      },
      error: (error) => {
        this.toastService.show(error.message, {
          classname: 'bg-danger text-light',
          delay: 15000,
          header: error.error,
        });
      },
      complete: () => (this.isLoading = false),
    });
  }

  onProductSelect(event: Event) {
    const product = (<HTMLSelectElement>event.target).value;
    this.selectedValues.product = product;
    this.filterOrders();
  }
  onSideSelect(event: Event) {
    const side = (<HTMLSelectElement>event.target).value;
    switch (side) {
      case OrderSide.BUY:
        this.selectedValues.side = OrderSide.BUY;
        break;
      case OrderSide.SELL:
        this.selectedValues.side = OrderSide.SELL;
        break;
    }
    this.filterOrders();
  }
  onTypeSelect(event: Event) {
    const type = (<HTMLSelectElement>event.target).value;
    switch (type) {
      case OrderType.LIMIT:
        this.selectedValues.type = OrderType.LIMIT;
        break;
      case OrderType.MARKET:
        this.selectedValues.type = OrderType.MARKET;
        break;
    }
    this.filterOrders();
  }
  onStatusSelect(event: Event) {
    const status = (<HTMLSelectElement>event.target).value;
    switch (status) {
      case OrderStatus.OPEN:
        this.selectedValues.status = OrderStatus.OPEN;
        break;
      case OrderStatus.CANCELLED:
        this.selectedValues.status = OrderStatus.CANCELLED;
        break;
      case OrderStatus.COMPLETED:
        this.selectedValues.status = OrderStatus.COMPLETED;
        break;
    }
    this.filterOrders();
  }
  onReset() {
    this.filteredOrders = this.orders;
    this.selectedValues = {};
  }
  private filterOrders() {
    let ordersToFilter = this.orders;
    if (
      this.selectedValues.product !== null &&
      this.selectedValues.product !== undefined
    ) {
      ordersToFilter = ordersToFilter.filter(
        (order) => order.product === this.selectedValues.product
      );
    }
    if (
      this.selectedValues.side !== null &&
      this.selectedValues.side !== undefined
    ) {
      ordersToFilter = ordersToFilter.filter(
        (order) => order.side === this.selectedValues.side
      );
    }
    if (
      this.selectedValues.type !== null &&
      this.selectedValues.type !== undefined
    ) {
      ordersToFilter = ordersToFilter.filter(
        (order) => order.type === this.selectedValues.type
      );
    }
    if (
      this.selectedValues.status !== null ||
      this.selectedValues.status !== undefined
    ) {
      ordersToFilter = ordersToFilter.filter((order) => {
        const status = this.computeStatus(order);
        return status === this.selectedValues.status;
      });
    }
    this.filteredOrders = ordersToFilter;
  }
  computeStatus(order: OrdersDto) {
    if (order.complete ?? false) {
      return OrderStatus.COMPLETED;
    }
    if (order.cancelled ?? false) {
      return OrderStatus.CANCELLED;
    }
    return OrderStatus.OPEN;
  }
}
