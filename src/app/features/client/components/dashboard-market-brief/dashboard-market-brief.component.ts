import { Component, OnDestroy, OnInit } from '@angular/core';
import StockBrief from '../../models/stock-brief.model';
import { MarketDataService } from '../../services/market-data/market-data.service';
import { Message } from '@stomp/stompjs';
import { Exchange } from 'src/app/core/models/exchange.enum';
import MarketData, { MarketDataCache } from '../../models/market-data.model';
import { Subscription } from 'rxjs';
import { marketDataUrls } from '../../services/market-data/market-data-service-factory';

@Component({
  selector: 'app-dashboard-market-brief',
  templateUrl: './dashboard-market-brief.component.html',
  styleUrls: ['./dashboard-market-brief.component.scss'],
})
export class DashboardMarketBriefComponent implements OnInit, OnDestroy {
  marketData: Map<Exchange, StockBrief[]>;
  selectedExchange = Exchange.MAL1;
  subscription: Subscription | undefined;
  isLoading = false;

  constructor(private marketDataService: MarketDataService) {
    this.marketData = new Map();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.marketDataService
      .watch(marketDataUrls.marketDataTopic)
      .subscribe((message: Message) => {
        const data = JSON.parse(message.body);
        this.parseMarketData(data);
        this.isLoading = false;
      });
    this.marketDataService.publish({
      destination: marketDataUrls.initialMarketDataTopic,
      body: '',
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private parseMarketData(data: MarketData | MarketData[]) {
    if (Array.isArray(data)) {
      (data as MarketData[]).forEach((item) => {
        let marketDataCacheMap: Map<string, MarketDataCache> = new Map(
          Object.entries(item.marketDataCaches)
        );
        this.marketData.set(
          item.exchange,
          StockBrief.parseMarketData(marketDataCacheMap)
        );
      });
      return;
    }
    let marketDataCacheMap: Map<string, MarketDataCache> = new Map(
      Object.entries(data.marketDataCaches)
    );
    this.marketData.set(
      data.exchange,
      StockBrief.parseMarketData(marketDataCacheMap)
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
