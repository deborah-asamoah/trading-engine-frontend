import { OrderSide, OrderType } from 'src/app/core/models/order.model';

interface OrdersDto {
  id: string;
  product: string;
  quantity: number;
  price: number;
  side: OrderSide;
  type: OrderType;
  portfolio: string;
  cancelled: boolean;
  client: string;
  cumulativeQuantity: number;
  value?: number;
  complete: boolean;
}

export default OrdersDto;
