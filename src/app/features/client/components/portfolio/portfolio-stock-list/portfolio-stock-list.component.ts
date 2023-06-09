import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderStatus } from 'src/app/core/models/order-status.enum';
import Order from 'src/app/core/models/order.model';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'portfolio-stock-list',
  templateUrl: './portfolio-stock-list.component.html',
  styleUrls: ['./portfolio-stock-list.component.scss']
})
export class PortfolioStockListComponent implements OnInit {

  @Input() modal?: NgbActiveModal;
  @Input() portId?: string;
  @Input() portfolioName?: string;
  portfolioOrders: OrdersDto[] = [];
  status: any;

  constructor(
    private clientDataService: ClientDataService,
  ) {}

  ngOnInit(): void {
    console.log(this.portId)
    this.clientDataService.getPortfolioOrders(this.portId!).subscribe(
      res => {
        this.portfolioOrders = (res as  { data: OrdersDto[]}).data;
        this.portfolioOrders.forEach(element => {
          this.status = this.computeStatus(element)
        });
      }
      
    )
  }

  computeStatus(portfolioOrder: OrdersDto) {
    if (portfolioOrder.complete ?? false) {
      return OrderStatus.COMPLETED;
    }
    if (portfolioOrder.cancelled ?? false) {
      return OrderStatus.CANCELLED;
    }
    return OrderStatus.OPEN;
  }

}
