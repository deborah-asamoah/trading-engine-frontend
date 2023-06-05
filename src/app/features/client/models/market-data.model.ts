import { Exchange } from 'src/app/core/models/exchange.enum';

export interface ProductData {
  AAPL: MarketDataCache;
  AMZN: MarketDataCache;
  GOOGL: MarketDataCache;
  IBM: MarketDataCache;
  MSFT: MarketDataCache;
  NFLX: MarketDataCache;
  ORCL: MarketDataCache;
  TSLA: MarketDataCache;
}
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
  marketDataCaches: ProductData;
}

export default MarketData;
