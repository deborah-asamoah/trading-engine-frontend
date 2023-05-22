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
import { DashboardHeadingComponent } from './components/dashboard-heading/dashboard-heading.component';
import { DashboardMarketBriefComponent } from './components/dashboard-market-brief/dashboard-market-brief.component';
import { DashboardOrderBoxComponent } from './components/dashboard-order-box/dashboard-order-box.component';
import { DashboardTrendBoxComponent } from './components/dashboard-trend-box/dashboard-trend-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    BaseComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardHeadingComponent,
    DashboardMarketBriefComponent,
    DashboardOrderBoxComponent,
    DashboardTrendBoxComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
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
