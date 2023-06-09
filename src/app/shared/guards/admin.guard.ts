import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthClientService } from '../services/auth-client/auth-client.service';
import { ClientDataService } from '../services/client-data/client-data.service';
import Role from 'src/app/core/models/role.enum';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(
    public authClientService: AuthClientService,
    public clientService: ClientDataService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (
      this.clientService.client.role !== Role.ADMIN ||
      this.authClientService.isLoggedIn != true
    ) {
      this.router.navigate(['/auth/login']);
    }
    return true;
  }
}
