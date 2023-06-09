import { Component, Output } from '@angular/core';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'cancelled-trades',
  templateUrl: './cancelled-trades.component.html',
  styleUrls: ['./cancelled-trades.component.scss']
})
export class CancelledTradesComponent {
  @Output() cancelledTrades: OrdersDto[] = [];

  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    this.adminService.getCancelledTrades().subscribe(
      res => {
        this.cancelledTrades = (res as  { data: OrdersDto[]}).data;
        console.log(res)
        console.log(this.cancelledTrades)
      }
    )
  }

}
