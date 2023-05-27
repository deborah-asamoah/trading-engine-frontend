export enum OrderType {
  MARKET = 'MARKET',
  LIMIT = 'LIMIT',
}

export enum OrderSide {
  BUY = 'BUY',
  SELL = 'SELL',
}


class Order {
  product: string;
  price: number;
  type: OrderType;
  quantity: number;
  side: OrderSide;
  portfolioId: number;

  constructor(
    product: string,
    price: number,
    type: OrderType,
    quantity: number,
    side: OrderSide,
    portfolioId: number
  ) {
    this.product = product;
    this.price = price;
    this.type = type;
    this.quantity = quantity;
    this.side = side;
    this.portfolioId = portfolioId;
  }
}

export default Order;
