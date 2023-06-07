import LastProductTrade from './last-product-trade.model';

export interface TradeProducts {
  AAPL: LastProductTrade[];
  AMZN: LastProductTrade[];
  GOOGL: LastProductTrade[];
  IBM: LastProductTrade[];
  MSFT: LastProductTrade[];
  NFLX: LastProductTrade[];
  ORCL: LastProductTrade[];
  TSLA: LastProductTrade[];
}

interface LastProductTradeDto {
  MAL1: TradeProducts;
  MAL2: TradeProducts;
}

export default LastProductTradeDto;
