import { Exchange } from 'src/app/core/models/exchange.enum';

interface LastProductTrade {
  id: string;
  lastTradedPrice: number;
  exchange: Exchange;
  product: string;
  timestamp: string;
}

export default LastProductTrade;
