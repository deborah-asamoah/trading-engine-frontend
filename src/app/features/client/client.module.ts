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
  faAngleRight,
  faArrowRightFromBracket,
  faBars,
  faBriefcase,
  faCartShopping,
  faHouse,
  faMoneyBillTrendUp,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { DashboardHeadingComponent } from './components/dashboard/dashboard-heading/dashboard-heading.component';
import { DashboardMarketBriefComponent } from './components/dashboard/dashboard-market-brief/dashboard-market-brief.component';
import { DashboardOrderBoxComponent } from './components/dashboard/dashboard-order-box/dashboard-order-box.component';
import { DashboardOpenOrdersComponent } from './components/dashboard/dashboard-open-orders/dashboard-open-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardGraphComponent } from './components/dashboard/dashboard-graph/dashboard-graph.component';
import { PortfolioHeadingComponent } from './components/portfolio/portfolio-heading/portfolio-heading.component';
import { PortfoliosListComponent } from './components/portfolio/portfolios-list/portfolios-list.component';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { ToastContainerComponent } from '../../shared/components/toast-container/toast-container.component';
import { MarketDataService } from './services/market-data/market-data.service';
import marketDataServiceFactory from './services/market-data/market-data-service-factory';
import { CreatePortfolioComponent } from './components/portfolio/create-portfolio/create-portfolio.component';
import { PortfolioStockListComponent } from './components/portfolio/portfolio-stock-list/portfolio-stock-list.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersHeaderComponent } from './components/orders/orders-header/orders-header.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

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
    PortfolioHeadingComponent,
    PortfoliosListComponent,
    PortfoliosComponent,
    CreatePortfolioComponent,
    PortfolioStockListComponent,
    OrdersComponent,
    OrdersHeaderComponent,
    OrdersListComponent,
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
    CanvasJSAngularChartsModule,
  ],
  providers: [
    {
      provide: MarketDataService,
      useFactory: marketDataServiceFactory,
    },
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
      faArrowRightFromBracket,
      faPlus,
      faAngleRight,
      faTrash
    );
  }
}
