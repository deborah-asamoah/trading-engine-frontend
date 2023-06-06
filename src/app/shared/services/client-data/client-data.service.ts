import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import APIException from 'src/app/core/models/api-exception.model';
import Client from 'src/app/core/models/client.model';
import CreatePortfolio from 'src/app/core/models/createportfolio.model';
import Order from 'src/app/core/models/order.model';
import { environment } from 'src/environments/environment.development';
import PortfolioListDTO from '../../models/portfolioListDTO.model';

@Injectable({
  providedIn: 'root',
})
export class ClientDataService {
  private _client!: Client;
  constructor(private http: HttpClient) {}

  get client() {
    if (this._client) {
      return this._client;
    }
    this._client = JSON.parse(localStorage.getItem('client')!);
    return this._client;
  }

  set client(client: Client) {
    this._client = client;
    localStorage.setItem('client', JSON.stringify(this._client));
  }

  createOrder(order: Order) {
    return this.http
      .post<string>(environment.ordersBaseUrl, order)
      .pipe(catchError(this.handleError));
  }

  getPortfolios() {
    return this.http
      .get<PortfolioListDTO>(
        `${environment.portfoliosBaseUrl}/client/${this._client.id}`
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let error = <APIException>{
      error: err.error,
      statusCode: 0,
      message: 'Could not complete order',
    };
    if (err.status !== 0) {
      const errorResponse: APIException = err.error;
      error = errorResponse;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => error);
  }


  createPortfolio(createPortfolio: CreatePortfolio) {
    createPortfolio.clientID = this._client.id;
    return this.http
      .post(`${environment.portfoliosBaseUrl}`, createPortfolio);
  }

  getPortfolioOrders(id: string) {
    return this.http.get(`${environment.ordersBaseUrl}/${id}/orders`).pipe(catchError(this.handleError));
  }

}
