import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardHeadingComponent } from './components/dashboard/admin-dashboard-heading/admin-dashboard-heading.component';
import { AdminDashboardNavbarComponent } from './components/dashboard/admin-dashboard-navbar/admin-dashboard-navbar.component';
import { faBars, faChartSimple, faHouse, faRightLeft, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminDashboardSidebarComponent } from './components/dashboard/admin-dashboard-sidebar/admin-dashboard-sidebar.component';
import { AdminBaseComponent } from './pages/admin-base/admin-base.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TradesListComponent } from './components/trades/trades-list/trades-list.component';
import { OpenTradesComponent } from './components/trades/open-trades/open-trades.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';
import { AdminClientsListComponent } from './components/clients/admin-clients-list/admin-clients-list.component';
import { AdminClientStockComponent } from './components/clients/admin-client-stock/admin-client-stock.component';
import { AdminExchangesComponent } from './pages/admin-exchanges/admin-exchanges.component';
import { CompleteTradesComponent } from './components/trades/complete-trades/complete-trades.component';
import { CancelledTradesComponent } from './components/trades/cancelled-trades/cancelled-trades.component';


@NgModule({
  declarations: [
    AdminDashboardHeadingComponent,
    AdminDashboardNavbarComponent,
    AdminDashboardSidebarComponent,
    AdminBaseComponent,
    AdminDashboardComponent,
    TradesListComponent,
    OpenTradesComponent,
    AdminClientsComponent,
    AdminClientsListComponent,
    AdminClientStockComponent,
    AdminExchangesComponent,
    CompleteTradesComponent,
    CancelledTradesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgbModule,
  ]
})
export class AdminModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBars,
      faHouse,
      faChartSimple,
      faUsers,
      faRightLeft

    );
  }
}
