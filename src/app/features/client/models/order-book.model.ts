import { Exchange } from 'src/app/core/models/exchange.enum';
import { OrderSide, OrderType } from 'src/app/core/models/order.model';

interface OrderBook {
  cumulativePrice: number;
  cumulativeQuantity: number;
  exchange: Exchange;
  orderId: string;
  orderSide: OrderSide;
  orderType: OrderType;
  price: number;
  product: string;
  quantity: number;
}

export default OrderBook;
