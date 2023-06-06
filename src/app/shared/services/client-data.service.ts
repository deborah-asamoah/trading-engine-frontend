import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import Order from 'src/app/core/models/order.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import { environment } from 'src/environments/environment';
import PortfolioListDTO from '../models/portfolioListDTO.model';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {

  private BASE_URL = 'http://localhost:8083/api/v1/portfolio';
  private _client!: Client;
  constructor(private http: HttpClient) {
  }

  get client() {
    return this._client;
  }

  set client (client : Client){
    this._client = client;
  }

  createOrder(order: Order) {
    return this.http.post(environment.ordersBaseUrl, order);
  }

  getPortfolios() {
    return this.http.get<PortfolioListDTO>(`${this.BASE_URL}/client/${this._client.id}`);
  }

}
