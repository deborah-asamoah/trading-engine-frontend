 import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Login from 'src/app/core/models/login.model';
import RegisterClient from 'src/app/core/models/registerclient.model';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from '../client-data/client-data.service';
import APIException from 'src/app/core/models/api-exception.model';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {
  private BASE_URL = 'http://localhost:8083/api/auth';

  constructor(
    private http: HttpClient, 
    public router: Router,
    public location: Location
  ) { }



  registerClient(registerClient: RegisterClient) {
    return this.http
    .post(`${this.BASE_URL}/register`, registerClient).pipe(
      catchError(this.handleError)
    );
  }


  authenticateClient(login: Login) {
    return this.http
    .post(`${this.BASE_URL}/login`, login).pipe(catchError(this.handleError))
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    return localStorage.removeItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    if (removeToken == null) {
      this.router.navigate(['auth/login']);
    }
  }

  getClientProfile(id: any): Observable<any>{
    return this.http.get(`${this.BASE_URL}/client/${id}`).pipe(
      map((res) => {
        return res || {};
      }),
    )
  }


  private handleError(err: HttpErrorResponse) {
    let error = <APIException>{
      error: err.error,
      statusCode: 0,
      message: 'Could not authenticate user',
    };
    if (err.status !== 0) {
      const errorResponse: APIException = err.error;
      error = errorResponse;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => error);
  }

  
}
