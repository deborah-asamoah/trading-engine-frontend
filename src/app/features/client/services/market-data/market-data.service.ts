import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';

@Injectable()
export class MarketDataService extends RxStomp {
  constructor() {
    super();
  }
}
