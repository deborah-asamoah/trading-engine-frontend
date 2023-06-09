import { Component, OnInit, Output } from '@angular/core';
import OrdersDto from 'src/app/shared/models/ordersDto.model';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'app-complete-trades',
  templateUrl: './complete-trades.component.html',
  styleUrls: ['./complete-trades.component.scss']
})
export class CompleteTradesComponent implements OnInit {

  @Output() completedTrades: OrdersDto[] = [];

  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {
    this.adminService.getCompletedTrades().subscribe(
      res => {
        this.completedTrades = (res as  { data: OrdersDto[]}).data;
        console.log(res)
        console.log(this.completedTrades)
      }
    )
  }

}
