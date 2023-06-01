import OrderBook from './order-book.model';

interface OrderBookInput {
  product: string;
  orderBookList: OrderBook[];
}

export default OrderBookInput;
