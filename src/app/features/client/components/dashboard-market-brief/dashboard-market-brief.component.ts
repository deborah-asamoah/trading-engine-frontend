import { Component, OnInit } from '@angular/core';
import StockBrief from '../../models/stock-brief.model';
import { MarketDataService } from '../../services/market-data/market-data.service';
import { Message } from '@stomp/stompjs';
import { Exchange } from 'src/app/core/models/exchange.enum';
import MarketData from '../../models/market-data.model';

@Component({
  selector: 'app-dashboard-market-brief',
  templateUrl: './dashboard-market-brief.component.html',
  styleUrls: ['./dashboard-market-brief.component.scss'],
})
export class DashboardMarketBriefComponent implements OnInit {
  marketData: Map<Exchange, StockBrief[]>;
  selectedExchange = Exchange.MAL1;
  isLoading = false;

  constructor(private marketDataService: MarketDataService) {
    this.marketData = new Map();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.marketDataService
      .watch('/market-data/update')
      .subscribe((message: Message) => {
        const data = JSON.parse(message.body);
        this.parseMarketData(data);
        this.isLoading = false;
      });
    this.marketDataService.publish({
      destination: '/app/market-data/initial',
      body: '',
    });
  }

  private parseMarketData(data: MarketData | MarketData[]) {
    if (Array.isArray(data)) {
      (data as MarketData[]).forEach((item) => {
        this.marketData.set(
          item.exchange,
          StockBrief.parseMarketData(item.marketDataCaches)
        );
      });
      return;
    }
    this.marketData.set(
      data.exchange,
      StockBrief.parseMarketData(data.marketDataCaches)
    );
  }

  onSortMarketBrief(e: Event) {
    console.log((<HTMLSelectElement>e.target).value);
  }
  onSelectExchange(e: Event) {
    switch ((<HTMLSelectElement>e.target).value) {
      case Exchange.MAL1:
        this.selectedExchange = Exchange.MAL1;
        break;
      case Exchange.MAL2:
        this.selectedExchange = Exchange.MAL2;
        break;
    }
  }
}
