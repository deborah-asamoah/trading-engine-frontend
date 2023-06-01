import { Component, OnInit } from '@angular/core';
import { Message } from '@stomp/stompjs';
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

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    this.marketDataService
      .watch(marketDataUrls.orderBookTopic)
      .subscribe((message: Message) => {
        console.log(message.body);
      });
    this.marketDataService.publish({
      destination: marketDataUrls.initialOrderBookTopic,
      body: '',
    });
  }

  onOrderSideSelected(side: string) {
    console.log(side);
  }
  onProductSelected(event: Event) {
    console.log((<HTMLSelectElement>event.target).value);
  }
}
