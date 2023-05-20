import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BaseComponent } from './pages/base/base.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
