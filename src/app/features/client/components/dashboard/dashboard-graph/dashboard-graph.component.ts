import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '@stomp/stompjs';
import {
  Chart,
  ChartType,
  ChartConfiguration,
  ChartDataset,
  ChartTypeRegistry,
  ScatterDataPoint,
  BubbleDataPoint,
  ChartEvent,
} from 'chart.js';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';
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
    ChartDataset<
      keyof ChartTypeRegistry,
      (number | ScatterDataPoint | BubbleDataPoint | null)[]
    >[]
  > = new Map();

  constructor(private marketDataService: MarketDataService) {
    Chart.register(Annotation);
  }

  lineChartData: ChartConfiguration['data'] = {
    datasets: [],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              display: true,
              position: 'center',
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold',
              },
            },
          },
        ],
      },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit(): void {
    this.marketDataService
      .watch(marketDataUrls.trendTopic)
      .subscribe((message: Message) => {
        const data = JSON.parse(message.body);
        this.parseDatasets(data);
        this.lineChartData.datasets = this.exchangeDataSets.get(Exchange.MAL1)!;
      });
    this.marketDataService.publish({
      destination: marketDataUrls.initialTrendTopic,
    });
  }

  private parseDatasets(data: LastProductTradeDto | LastProductTradeUpdateDto) {
    if ((data as LastProductTradeUpdateDto).exchange !== undefined) {
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
      const prices: number[] = [];
      productList.forEach((trade) => prices.push(trade.lastTradedPrice));
      const graphData = {
        data: prices,
        label: item[0],
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      };
      dataset.push(graphData);
    });
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
}
