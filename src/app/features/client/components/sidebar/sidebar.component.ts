import { Component, Input } from '@angular/core';
import { AuthClientService } from '../../../../shared/services/auth-client/auth-client.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor (private authClientService: AuthClientService) {}

  @Input() name = '';

  logout() {
    console.log('logged out');
    this.authClientService.doLogout();
  }
}
