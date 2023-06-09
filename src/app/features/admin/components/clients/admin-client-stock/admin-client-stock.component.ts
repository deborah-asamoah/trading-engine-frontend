import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderStatus } from 'src/app/core/models/order-status.enum';
import Portfolio from 'src/app/core/models/portfolio.model';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import PortfolioListDTO from 'src/app/shared/models/portfolioListDTO.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';
import ClientDto from '../../../models/clientDto';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'admin-client-stock',
  templateUrl: './admin-client-stock.component.html',
  styleUrls: ['./admin-client-stock.component.scss']
})
export class AdminClientStockComponent implements OnInit {

  portfolios: Portfolio[] = [];
  portfolioStock: OrdersDto[] = [];

  @Input() client!: ClientDto

  status: any;

  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    this.adminService.getClientPortfolios(this.client?.id).subscribe(
      (res) => {
        console.log(res);
        this.portfolios = res.portfolioDTOS
      }
    )    
  }

  onPortfolioSelect(event: Event) {
    const portfolio = (<HTMLSelectElement>event.target).value;

    console.log(portfolio)
    this.adminService.getPortfolioOrders(portfolio).subscribe(
      (res) => {
        console.log(res);
        this.portfolioStock = (res as {data: OrdersDto[]}).data;

        this.portfolioStock.forEach(element => {
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
