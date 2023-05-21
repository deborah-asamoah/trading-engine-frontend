import { Component, Input } from '@angular/core';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() username: string = '';

  isMenuCollapsed = true;
}
