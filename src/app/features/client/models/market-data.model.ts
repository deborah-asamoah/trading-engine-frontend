import { Exchange } from 'src/app/core/models/exchange.enum';

export interface MarketDataCache {
  askPrice: number;
  bidPrice: number;
  buyLimit: number;
  lastTradedPrice: number;
  maxPriceShift: number;
  product: string;
  sellLimit: number;
}

interface MarketData {
  exchange: Exchange;
  marketDataCaches: MarketDataCache[];
}

export default MarketData;
