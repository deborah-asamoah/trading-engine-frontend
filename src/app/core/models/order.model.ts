export enum OrderType {
  MARKET = 'MARKET',
  LIMIT = 'LIMIT',
}

class Order {
  stock: string;
  price: number;
  type: OrderType;
  quantity: number;
  portfolioId: number;

  constructor(
    stock: string,
    price: number,
    type: OrderType,
    quantity: number,
    portfolioId: number
  ) {
    this.stock = stock;
    this.price = price;
    this.type = type;
    this.quantity = quantity;
    this.portfolioId = portfolioId;
  }
}

export default Order;
