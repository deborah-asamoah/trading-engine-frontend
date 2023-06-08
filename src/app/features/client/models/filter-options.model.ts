import { OrderStatus } from 'src/app/core/models/order-status.enum';
import { OrderSide, OrderType } from 'src/app/core/models/order.model';

interface FilterOptions {
  product?: string;
  side?: OrderSide;
  type?: OrderType;
  status?: OrderStatus;
}

export default FilterOptions;
