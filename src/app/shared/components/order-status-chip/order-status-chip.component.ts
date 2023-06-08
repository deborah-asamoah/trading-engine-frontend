import { Component, Input } from '@angular/core';
import { OrderStatus } from 'src/app/core/models/order-status.enum';

@Component({
  selector: 'app-order-status-chip',
  templateUrl: './order-status-chip.component.html',
  styleUrls: ['./order-status-chip.component.scss'],
})
export class OrderStatusChipComponent {
  readonly OrderStatus = OrderStatus;
  @Input({ required: true }) state!: OrderStatus;
}
