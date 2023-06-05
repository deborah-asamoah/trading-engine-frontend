 import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Login from 'src/app/core/models/login.model';
import RegisterClient from 'src/app/core/models/registerclient.model';

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
      // this.location.replaceState('/client/dashboard');
      this.router.navigate(['client/dashboard']);
    })
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
    if (removeToken == null) {
      this.router.navigate(['auth/login']);
    }
  }

}
