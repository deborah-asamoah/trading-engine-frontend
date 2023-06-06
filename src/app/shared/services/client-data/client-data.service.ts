import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import APIException from 'src/app/core/models/api-exception.model';
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
    return this.http
      .post<string>(environment.ordersBaseUrl, order)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let error = <APIException>{
      error: err.error,
      statusCode: 0,
      title: 'Could not complete order',
    };
    if (err.status !== 0) {
      const errorResponse: APIException = err.error;
      error = errorResponse;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => error);
  }
}
