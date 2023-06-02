import { Exchange } from 'src/app/core/models/exchange.enum';
import OrderBook from './order-book.model';

interface OrderBookInput {
  product: string;
  orderBookList: OrderBook[];
  exchange?: Exchange;
}

export default OrderBookInput;
