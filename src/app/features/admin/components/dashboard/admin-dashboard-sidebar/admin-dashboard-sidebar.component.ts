import { Component, Input } from '@angular/core';
import { AuthClientService } from 'src/app/shared/services/auth-client/auth-client.service';

@Component({
  selector: 'admin-dashboard-sidebar',
  templateUrl: './admin-dashboard-sidebar.component.html',
  styleUrls: ['./admin-dashboard-sidebar.component.scss']
})
export class AdminDashboardSidebarComponent {
  constructor (private authClientService: AuthClientService) {}

  @Input() name = '';

  logout() {
    console.log('logged out');
    this.authClientService.doLogout();
  }

}
