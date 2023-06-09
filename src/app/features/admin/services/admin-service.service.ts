import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import APIException from 'src/app/core/models/api-exception.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import PortfolioListDTO from 'src/app/shared/models/portfolioListDTO.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getOpenTrades(){
    return this.http.get(`${environment.ordersBaseUrl}/open`).pipe(catchError(this.handleError));
  }

  getCancelledTrades(){
    return this.http.get(`${environment.ordersBaseUrl}/cancelled`).pipe(catchError(this.handleError));
  }

  getCompletedTrades(){
    return this.http.get(`${environment.ordersBaseUrl}/complete`).pipe(catchError(this.handleError));
  }


  getClients(){
    return this.http.get(`${environment.clientBaseUrl}`).pipe(catchError(this.handleError));
  }


  getClientPortfolios(id: string){
    return this.http.get<{portfolioDTOS: Portfolio[]}>(`${environment.portfoliosBaseUrl}/client/${id}`).pipe(catchError(this.handleError));
  }

  getPortfolioOrders(id: string) {
    return this.http.get(`${environment.portfoliosBaseUrl}/${id}/orders`).pipe(catchError(this.handleError));
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


}
