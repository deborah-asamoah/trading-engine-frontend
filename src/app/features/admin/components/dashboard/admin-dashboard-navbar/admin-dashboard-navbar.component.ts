import { Component, Input } from '@angular/core';
import { AuthClientService } from 'src/app/shared/services/auth-client/auth-client.service';

@Component({
  selector: 'admin-dashboard-navbar',
  templateUrl: './admin-dashboard-navbar.component.html',
  styleUrls: ['./admin-dashboard-navbar.component.scss']
})
export class AdminDashboardNavbarComponent {
  constructor (private authClientService: AuthClientService) {}
  
  @Input() name: string = '';
  isMenuCollapsed = true;

  logout() {
    this.authClientService.doLogout();
  }

}
