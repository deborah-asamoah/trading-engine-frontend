import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelledTradesComponent } from './components/trades/cancelled-trades/cancelled-trades.component';
import { CompleteTradesComponent } from './components/trades/complete-trades/complete-trades.component';
import { OpenTradesComponent } from './components/trades/open-trades/open-trades.component';
import { AdminBaseComponent } from './pages/admin-base/admin-base.component';
import { AdminClientsComponent } from './pages/admin-clients/admin-clients.component';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'trades/open', pathMatch: 'full' },
      {
        path: 'trades/open',
        title: 'Trades',
        component: OpenTradesComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'trades/cancelled',
        title: 'Trades',
        component: CancelledTradesComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'trades/filled',
        title: 'Trades',
        component: CompleteTradesComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'clients',
        title: 'All Clients',
        component: AdminClientsComponent,
        canActivate: [AdminGuard],
      },
    ],
    component: AdminBaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
