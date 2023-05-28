import { MarketDataCache } from './market-data.model';

class StockBrief {
  public name: string;
  public bidPrice: number;
  public askPrice: number;
  public maxPriceShift: number;
  public lastTradedPrice: number;
  public trend: number;

  constructor(
    name: string,
    bidPrice: number,
    askPrice: number,
    maxPriceShift: number,
    lastTradedPrice: number,
    trend: number
  ) {
    this.name = name;
    this.bidPrice = bidPrice;
    this.askPrice = askPrice;
    this.maxPriceShift = maxPriceShift;
    this.lastTradedPrice = lastTradedPrice;
    this.trend = trend;
  }

  static parseMarketData(marketData: MarketDataCache[]) {
    return marketData.map((cache) => {
      return new StockBrief(
        cache.product,
        cache.bidPrice,
        cache.askPrice,
        cache.maxPriceShift,
        cache.lastTradedPrice,
        0
      );
    });
  }
}

export default StockBrief;
