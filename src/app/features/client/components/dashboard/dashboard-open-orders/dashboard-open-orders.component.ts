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
  orderBooks: Map<String, Map<Exchange, OrderBook[]>>;
  selectedProduct: string = '';
  selectedOrderSide: OrderSide = OrderSide.BUY;
  selectedExchange: Exchange = Exchange.MAL1;
  filteredOrders: OrderBook[] = [];

  constructor(private marketDataService: MarketDataService) {
    this.orderBooks = new Map();
  }

  ngOnInit(): void {
    this.marketDataService
      .watch(marketDataUrls.orderBookTopic)
      .subscribe((message: Message) => {
        const data = JSON.parse(message.body);
        console.log(data);
        this.parseOrderBooks(data);
        this.filterOrders();
      });
    this.marketDataService.publish({
      destination: marketDataUrls.initialOrderBookTopic,
    });
  }

  private parseOrderBooks(data: OrderBookInput | OrderBookInput[]) {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        this.orderBooks.set(
          item.product,
          this.groupByExchange(item.orderBookList)
        );
      });
      return;
    }
    const productExchangeOrderMap =
      this.orderBooks.get(data.product) ?? new Map();
    productExchangeOrderMap.set(data.exchange, data.orderBookList);
    this.orderBooks.set(data.product, productExchangeOrderMap);
  }

  private groupByExchange(orderBookList: OrderBook[]) {
    const firstExchangeData: OrderBook[] = [];
    const secondExchangeData: OrderBook[] = [];
    const exchangeSpecificMap = new Map();
    orderBookList.forEach((orderBook) => {
      if (orderBook.exchange === Exchange.MAL1) {
        firstExchangeData.push(orderBook);
      } else {
        secondExchangeData.push(orderBook);
      }
    });
    exchangeSpecificMap.set(Exchange.MAL1, firstExchangeData);
    exchangeSpecificMap.set(Exchange.MAL2, secondExchangeData);
    return exchangeSpecificMap;
  }

  private filterOrders() {
    const orders = this.orderBooks
      .get(this.selectedProduct)
      ?.get(this.selectedExchange);
    this.filteredOrders =
      orders?.filter((orders) => orders.orderSide === this.selectedOrderSide) ??
      [];
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
    this.filterOrders();
  }
  onProductSelected(event: Event) {
    this.selectedProduct = (<HTMLSelectElement>event.target).value;
    this.filterOrders();
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
    this.filterOrders();
  }
}
