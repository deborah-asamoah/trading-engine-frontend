import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Order from 'src/app/core/models/order.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'portfolio-stock-list',
  templateUrl: './portfolio-stock-list.component.html',
  styleUrls: ['./portfolio-stock-list.component.scss']
})
export class PortfolioStockListComponent implements OnInit {

  @Input() modal?: NgbActiveModal;
  @Input() portId?: string;
  portfolioOrders: any= [];

  constructor(
    private clientDataService: ClientDataService,
  ) {}

  ngOnInit(): void {
    console.log(this.portId)
    this.clientDataService.getPortfolioOrders(this.portId!).subscribe(
      res => {
        this.portfolioOrders = res;
      }
    )
  }

}
