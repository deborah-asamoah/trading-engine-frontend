import { Component, Input } from '@angular/core';
import { AuthClientService } from 'src/app/shared/services/auth-client/auth-client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor (private authClientService: AuthClientService) {}
  
  @Input() name: string = '';
  isMenuCollapsed = true;

  logout() {
    console.log('logged out');
    this.authClientService.doLogout();
  }

  
}
