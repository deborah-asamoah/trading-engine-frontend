import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import Order from 'src/app/core/models/order.model';
import Portfolio from 'src/app/core/models/portfolio.model';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private BASE_URL = 'http://localhost:8080/api/v1';
  private _client: Client;
  private _portfolios: Portfolio[];

  constructor(private http: HttpClient) {
    this._client = new Client('gerald-tetteh');
    this._portfolios = [
      new Portfolio(1, 'High Worth'),
      new Portfolio(2, 'Skeptical'),
      new Portfolio(3, 'Low Worth'),
    ];
  }

  get client() {
    return this._client;
  }
  get portfolios() {
    return this._portfolios;
  }

  createOrder(order: Order) {
    order.portfolioId = Number(order.portfolioId);
    return this.http.post(`${this.BASE_URL}/orders/create`, order);
  }
}
