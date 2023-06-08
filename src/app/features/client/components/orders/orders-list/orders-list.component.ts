import { Component, OnInit } from '@angular/core';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast-service.service';

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
  isLoading = true;

  constructor(
    private clientService: ClientDataService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.clientService.getOrders().subscribe({
      next: (result) => {
        this.orders = result.data;
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
}
