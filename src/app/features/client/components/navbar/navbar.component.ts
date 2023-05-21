import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() username: string = '';
  isMenuCollapsed = true;

  logout() {
    console.log('log out');
  }
}
