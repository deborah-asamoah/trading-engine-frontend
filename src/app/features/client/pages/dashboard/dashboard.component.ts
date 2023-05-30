import { Component, OnInit } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from 'src/app/shared/services/client-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  client!: Client;
  balance = 150.0;

  constructor(private clientDataService: ClientDataService) {}

  ngOnInit(): void {
    this.client = this.clientDataService.client;
  }
}
