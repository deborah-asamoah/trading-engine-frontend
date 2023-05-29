import { MarketDataService } from './market-data.service';
import { RxStompConfig } from '@stomp/rx-stomp';

export const marketDataUrls = {
  connect: 'ws://localhost:8080/market-data/subscribe',
  marketDataTopic: '/market-data/update',
  orderBookTopic: '/orderbook/update',
  initialMarketDataTopic: '/app/market-data/initial',
  initialOrderBookTopic: '/app/orderbook/initial',
};

const marketDataStompConfig: RxStompConfig = {
  // Which server?
  brokerURL: marketDataUrls.connect,

  // How often to heartbeat?
  // Interval in milliseconds, set to 0 to disable
  heartbeatIncoming: 0, // Typical value 0 - disabled
  heartbeatOutgoing: 20000, // Typical value 20000 - every 20 seconds

  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 500 (500 milli seconds)
  reconnectDelay: 200,

  // Will log diagnostics on console
  // It can be quite verbose, not recommended in production
  // Skip this key to stop logging to console
  debug: (msg: string): void => {
    console.log(new Date(), msg);
  },
};

export default function marketDataServiceFactory() {
  const marketDataService = new MarketDataService();
  marketDataService.configure(marketDataStompConfig);
  marketDataService.activate();
  return marketDataService;
}
