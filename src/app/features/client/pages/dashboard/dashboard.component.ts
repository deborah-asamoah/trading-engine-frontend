import { Component } from '@angular/core';
import Client from 'src/app/core/models/client.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  client = new Client('gerald-tetteh');
}
