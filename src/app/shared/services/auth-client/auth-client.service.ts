 import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Login from 'src/app/core/models/login.model';
import RegisterClient from 'src/app/core/models/registerclient.model';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from '../client-data/client-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthClientService {
  private BASE_URL = 'http://localhost:8083/api/auth';
  private client!: Client;

  constructor(
    private http: HttpClient, 
    public router: Router,
    public location: Location,
    private clientService: ClientDataService,
    ) { }


  registerClient(registerClient: RegisterClient) {
    return this.http
    .post(`${this.BASE_URL}/register`, registerClient)
    .subscribe((res: any) => {
      this.setToken(res.accessToken);
      this.client = new Client(res.id, res.name, res.email);
      this.clientService.client = this.client;
      this.location.replaceState('/client/dashboard');
      this.router.navigate(['client/dashboard']);
    })
  }

  authenticateClient(login: Login) {
    return this.http
    .post(`${this.BASE_URL}/login`, login)
    .subscribe((res: any) => {
      this.setToken(res.accessToken);
      this.client = new Client(res.id, res.name, res.email);
      this.clientService.client = this.client;
      this.location.replaceState('/client/dashboard');
      this.router.navigate(['client/dashboard'], res);
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
}
