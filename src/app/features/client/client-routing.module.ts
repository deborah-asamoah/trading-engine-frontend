import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseComponent } from './pages/base/base.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PortfoliosComponent } from './pages/portfolios/portfolios.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  {
    path: 'client',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        title: 'Client - Dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'portfolios',
        title: 'Client - Portfolios',
        component: PortfoliosComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'orders',
        title: 'Client - Orders',
        component: OrdersComponent,
        canActivate: [AuthGuard],
      },
    ],
    component: BaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
