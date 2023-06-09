import { Component, Input, OnInit } from '@angular/core';
import OrdersDto from 'src/app/shared/models/ordersDto.model';

@Component({
  selector: 'trades-list',
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.scss']
})
export class TradesListComponent implements OnInit {

  @Input() trades: OrdersDto[] = [];



  ngOnInit(): void {
    console.log(this.trades)
  }

}
