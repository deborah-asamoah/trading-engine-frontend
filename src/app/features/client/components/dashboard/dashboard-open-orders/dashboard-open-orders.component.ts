import { Component, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { Exchange } from 'src/app/core/models/exchange.enum';
import { OrderSide } from 'src/app/core/models/order.model';
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
  selectedOrderSide: OrderSide = OrderSide.BUY;
  selectedExchange: Exchange = Exchange.MAL1;

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

  public get filteredOrders(): OrderBook[] {
    const book = this.orderBooks.get(this.selectedProduct);
    console.log(book);
    if (!book) return [];
    return book.filter(
      (book) =>
        book.orderSide === this.selectedOrderSide &&
        book.exchange == this.selectedExchange
    );
  }

  onOrderSideSelected(side: string) {
    switch (side) {
      case OrderSide.BUY:
        this.selectedOrderSide = OrderSide.BUY;
        break;
      case OrderSide.SELL:
        this.selectedOrderSide = OrderSide.SELL;
        break;
    }
  }
  onProductSelected(event: Event) {
    this.selectedProduct = (<HTMLSelectElement>event.target).value;
  }
  onExchangeSelected(event: Event) {
    const selectedOption = (<HTMLSelectElement>event.target).value;
    switch (selectedOption) {
      case Exchange.MAL1:
        this.selectedExchange = Exchange.MAL1;
        break;
      case Exchange.MAL2:
        this.selectedExchange = Exchange.MAL2;
        break;
    }
  }
}
