import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '@stomp/stompjs';
import { MarketDataService } from '../../../services/market-data/market-data.service';
import { marketDataUrls } from '../../../services/market-data/market-data-service-factory';
import { Exchange } from 'src/app/core/models/exchange.enum';
import LastProductTrade from '../../../models/last-product-trade.model';
import LastProductTradeDto, {
  TradeProducts,
} from '../../../models/last-product-trade-dto.model';
import LastProductTradeUpdateDto from '../../../models/last-product-trade-update-dto.model';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.scss'],
})
export class DashboardGraphComponent implements OnInit {
  productList: string[] = [
    'GOOGL',
    'IBM',
    'MSFT',
    'AAPL',
    'TSLA',
    'ORCL',
    'AMZN',
  ];
  exchangeDataSets: Map<
    Exchange,
    {
      type: string;
      showInLegend: boolean;
      name: string;
      dataPoints: {
        label: string;
        y: number;
      }[];
    }[]
  > = new Map();
  isLoading = false;
  chartOptions = {
    animationEnabled: true,
    title: {
      text: 'Market Trend',
      fontSize: 25,
      fontWeight: "'normal'",
      horizontalAlign: 'left',
      padding: 5,
    },
    axisX: {
      title: 'Time',
      titleFontSize: 20,
    },
    axisY: {
      title: 'Last Traded Price',
      titleFontSize: 20,
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: function (e: any) {
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      },
    },
    data: <any>[],
  };
  chart?: any;

  constructor(private marketDataService: MarketDataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.marketDataService
      .watch(marketDataUrls.trendTopic)
      .subscribe((message: Message) => {
        this.isLoading = true;
        const data = JSON.parse(message.body);
        this.parseDatasets(data);
        this.chartOptions.data = this.exchangeDataSets.get(Exchange.MAL1)!;
        this.isLoading = false;
        this.chart?.render();
      });
    this.marketDataService.publish({
      destination: marketDataUrls.initialTrendTopic,
    });
  }

  private parseDatasets(data: LastProductTradeDto | LastProductTradeUpdateDto) {
    console.log(this.exchangeDataSets);
    if ((data as LastProductTradeUpdateDto).exchange !== undefined) {
      const exchangeData = this.exchangeDataSets.get(
        (data as LastProductTradeUpdateDto).exchange
      );
      console.log(exchangeData);
      (data as LastProductTradeUpdateDto).lastProductTrades.forEach((trade) => {
        const dataPoint = {
          label: new Date(trade.timestamp).toLocaleTimeString(),
          y: trade.lastTradedPrice,
        };
        const line = exchangeData?.find((item) => item.name === trade.product);
        const index = exchangeData?.indexOf(line!) ?? 0;
        line?.dataPoints.push(dataPoint);
        exchangeData![index] = line!;
      });
      this.exchangeDataSets.set(
        (data as LastProductTradeUpdateDto).exchange,
        exchangeData!
      );
      console.log(this.exchangeDataSets);
      return;
    }
    const firstExchangeData = (data as LastProductTradeDto).MAL1;
    let dataset = this.exchangeDataSets.get(Exchange.MAL1) ?? [];
    this.parseExchangeData(firstExchangeData, dataset);
    this.exchangeDataSets.set(Exchange.MAL1, dataset);

    const secondExchangeData = (data as LastProductTradeDto).MAL2;
    dataset = this.exchangeDataSets.get(Exchange.MAL2) ?? [];
    this.parseExchangeData(secondExchangeData, dataset);
    this.exchangeDataSets.set(Exchange.MAL2, dataset);
  }

  private parseExchangeData(exchangeData: TradeProducts, dataset: Object[]) {
    Object.entries(exchangeData).forEach((item) => {
      const productList = item[1] as LastProductTrade[];
      const prices: { label: string; y: number }[] = [];
      productList.forEach((trade) =>
        prices.push({
          label: new Date(trade.timestamp).toLocaleTimeString(),
          y: trade.lastTradedPrice,
        })
      );
      const graphData = {
        type: 'spline',
        showInLegend: true,
        name: item[0],
        dataPoints: prices,
      };
      dataset.push(graphData);
    });
  }

  onChartEvent(chart: any) {
    this.chart = chart;
  }
}
