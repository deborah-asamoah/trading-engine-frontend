import { Component, OnInit, Output } from '@angular/core';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'open-trades',
  templateUrl: './open-trades.component.html',
  styleUrls: ['./open-trades.component.scss']
})
export class OpenTradesComponent implements OnInit {
  @Output() openTrades: OrdersDto[] = [];

  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    this.adminService.getOpenTrades().subscribe(
      res => {
        this.openTrades = (res as  { data: OrdersDto[]}).data;

        
      }
    )
  }
}
