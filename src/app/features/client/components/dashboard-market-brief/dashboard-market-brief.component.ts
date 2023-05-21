import { Component, OnInit } from '@angular/core';
import StockBrief from '../../models/stock-brief.model';

@Component({
  selector: 'app-dashboard-market-brief',
  templateUrl: './dashboard-market-brief.component.html',
  styleUrls: ['./dashboard-market-brief.component.scss'],
})
export class DashboardMarketBriefComponent implements OnInit {
  stockBriefList: StockBrief[] = [];

  ngOnInit(): void {
    this.stockBriefList = [
      new StockBrief('GOOGL', 22.5, 22.7, 0.5, 22.1, 3.5),
      new StockBrief('AAPL', 22.5, 22.7, 0.5, 22.1, -4.5),
      new StockBrief('AMZN', 22.5, 22.7, 0.5, 22.1, 1.5),
      new StockBrief('IBM', 22.5, 22.7, 0.5, 22.1, 4.5),
    ];
  }

  onSortMarketBrief(e: Event) {
    console.log((<HTMLSelectElement>e.target).value);
  }
}
