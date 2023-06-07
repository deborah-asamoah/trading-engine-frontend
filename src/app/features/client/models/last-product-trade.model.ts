import { Exchange } from 'src/app/core/models/exchange.enum';

interface LastProductTrade {
  id: string;
  lastTradedPrice: number;
  exchange: Exchange;
  product: string;
  timestamp: Date;
}

export default LastProductTrade;
