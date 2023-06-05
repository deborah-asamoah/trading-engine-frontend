 import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Login from 'src/app/core/models/login.model';
import RegisterClient from 'src/app/core/models/registerclient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {
  private BASE_URL = 'http://localhost:8083/api/auth';

  constructor(private http: HttpClient, public router: Router) { }


  registerClient(registerClient: RegisterClient) {
    return this.http
    .post(`${this.BASE_URL}/register`, registerClient)
    .subscribe((res: any) => {
      this.setToken(res.accessToken);
      this.router.navigate(['client/dashboard']);
    })
  }

  authenticateClient(login: Login) {
    return this.http
    .post(`${this.BASE_URL}/login`, login)
    .subscribe((res: any) => {
      this.setToken(res.accessToken);
      this.router.navigate(['client/dashboard']);
    })
  }

  refresh(refreshToken: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/refresh`, { refreshToken });
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  setRefreshToken(refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
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
    console.log("one")
    if (removeToken == null) {
      this.router.navigate(['auth/login']);
      console.log("two")
    }
  }

  // handleError(error: HttpErrorResponse) {
  //   let msg = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     msg = error.error.message;
  //   } else {
  //     // server-side error
  //     msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(msg);
  // }

}
