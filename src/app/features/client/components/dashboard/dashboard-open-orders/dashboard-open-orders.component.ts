import { Component, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
import OrderBookInput from '../../../models/order-book-input.model';
import OrderBook from '../../../models/order-book.model';
import { marketDataUrls } from '../../../services/market-data/market-data-service-factory';
import { MarketDataService } from '../../../services/market-data/market-data.service';

@Component({
  selector: 'app-dashboard-open-orders',
  templateUrl: './dashboard-open-orders.component.html',
  styleUrls: ['./dashboard-open-orders.component.scss'],
})
export class DashboardOpenOrdersComponent implements OnInit {
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
  orderBooks: Map<String, OrderBook[]>;
  selectedProduct: string = '';

  constructor(private marketDataService: MarketDataService) {
    this.orderBooks = new Map();
  }

  ngOnInit(): void {
    this.marketDataService
      .watch(marketDataUrls.orderBookTopic)
      .subscribe((message: Message) => {
        const data = JSON.parse(message.body);
        this.parseOrderBooks(data);
      });
    this.marketDataService.publish({
      destination: marketDataUrls.initialOrderBookTopic,
    });
  }

  private parseOrderBooks(data: OrderBookInput | OrderBookInput[]) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this.orderBooks.set(item.product, item.orderBookList);
      });
      return;
    }
    this.orderBooks.set(data.product, data.orderBookList);
  }

  onOrderSideSelected(side: string) {
    console.log(side);
  }
  onProductSelected(event: Event) {
    console.log((<HTMLSelectElement>event.target).value);
  }
}
