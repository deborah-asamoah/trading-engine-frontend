import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelledTradesComponent } from './components/trades/cancelled-trades/cancelled-trades.component';
import { ClosedTradesComponent } from './components/trades/closed-trades/closed-trades.component';
import { FailedTradesComponent } from './components/trades/failed-trades/failed-trades.component';
import { FilledTradesComponent } from './components/trades/filled-trades/filled-trades.component';
import { OpenTradesComponent } from './components/trades/open-trades/open-trades.component';
import { TradesComponent } from './components/trades/trades/trades.component';
import { AdminBaseComponent } from './pages/admin-base/admin-base.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'trades/open', pathMatch: 'full' },
      {
        path: 'dashboard',
        title: 'Admin - Dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'trades/open',
        title: 'Trades',
        component: OpenTradesComponent
      },
      {
        path: 'trades/cancelled',
        title: 'Trades',
        component: CancelledTradesComponent
      },
      {
        path: 'trades/failed',
        title: 'Trades',
        component: FailedTradesComponent
      },
      {
        path: 'trades/closed',
        title: 'Trades',
        component: ClosedTradesComponent
      },
      {
        path: 'trades/filled',
        title: 'Trades',
        component: FilledTradesComponent
      },
      {
        path: 'clients',
        title: 'All Clients',
        component: AdminClientsComponent
      },
    ],
    component: AdminBaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
