import { Exchange } from 'src/app/core/models/exchange.enum';
import LastProductTrade from './last-product-trade.model';

interface LastProductTradeUpdateDto {
  exchange: Exchange;
  lastProductTrades: LastProductTrade[];
}

export default LastProductTradeUpdateDto;
