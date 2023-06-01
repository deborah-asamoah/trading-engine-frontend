import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import Order from 'src/app/core/models/order.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private _client: Client;
  private _portfolios: Portfolio[];

  constructor(private http: HttpClient) {
    this._client = new Client('gerald-tetteh');
    this._portfolios = [
      new Portfolio('80148814-fcdd-11ed-be56-0242ac120002', 'High Worth'),
      new Portfolio('80148814-fcdd-11ed-be56-0242ac120002', 'Skeptical'),
      new Portfolio('80148814-fcdd-11ed-be56-0242ac120002', 'Low Worth'),
    ];
  }

  get client() {
    return this._client;
  }
  get portfolios() {
    return this._portfolios;
  }

  createOrder(order: Order) {
    // order.portfolioId = Number(order.portfolioId);
    return this.http.post(environment.ordersBaseUrl, order);
  }
}
