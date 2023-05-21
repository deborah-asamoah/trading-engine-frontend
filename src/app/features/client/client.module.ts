import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseComponent } from './pages/base/base.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  faArrowRightFromBracket,
  faBars,
  faBriefcase,
  faCartShopping,
  faHouse,
  faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    DashboardComponent,
    BaseComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, FontAwesomeModule, NgbModule],
})
export class ClientModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
      faHouse,
      faBriefcase,
      faCartShopping,
      faMoneyBillTrendUp,
      faArrowRightFromBracket
    );
  }
}
