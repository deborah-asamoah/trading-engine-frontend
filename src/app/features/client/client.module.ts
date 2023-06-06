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
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import {
  faArrowRightFromBracket,
  faBars,
  faBriefcase,
  faCartShopping,
  faHouse,
  faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardHeadingComponent } from './components/dashboard/dashboard-heading/dashboard-heading.component';
import { DashboardMarketBriefComponent } from './components/dashboard/dashboard-market-brief/dashboard-market-brief.component';
import { DashboardOrderBoxComponent } from './components/dashboard/dashboard-order-box/dashboard-order-box.component';
import { DashboardOpenOrdersComponent } from './components/dashboard/dashboard-open-orders/dashboard-open-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarketDataService } from './services/market-data/market-data.service';
import marketDataServiceFactory from './services/market-data/market-data-service-factory';
import { DashboardGraphComponent } from './components/dashboard/dashboard-graph/dashboard-graph.component';
import { ToastContainerComponent } from '../../shared/components/toast-container/toast-container.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BaseComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardHeadingComponent,
    DashboardMarketBriefComponent,
    DashboardOrderBoxComponent,
    DashboardOpenOrdersComponent,
    DashboardGraphComponent,
  ],
  providers: [
    {
      provide: MarketDataService,
      useFactory: marketDataServiceFactory,
    },
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ToastContainerComponent,
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
