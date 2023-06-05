import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthClientService } from '../services/auth-client/auth-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authClientService: AuthClientService,
    public router: Router
  ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // const token = localStorage.getItem('token');
    // const refreshToken = localStorage.getItem('refreshToken');


    if (this.authClientService.isLoggedIn !== true) {
      window.alert("Access not allowed");
      this.router.navigate(['auth/login'])
    } 
    // else if (refreshToken) {
    //   this.authClientService.refresh(refreshToken).pipe(
    //     switchMap((response) => {
    //       localStorage.setItem('token', response.accessToken);
    //       localStorage.setItem('refreshToken', response.refreshToken)
    //       return of(true);
    //     }),
    //     (error) => {
    //       console.log(error);
    //       this.router.navigate(['auth/login']);
    //       return of(false);
    //     }
    //   ).subscribe();
    //   return false;
    // }
    return true;
  }
  
}
