import { Component, OnInit } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'app-dashboard-heading',
  templateUrl: './dashboard-heading.component.html',
  styleUrls: ['./dashboard-heading.component.scss'],
})
export class DashboardHeadingComponent implements OnInit {
  balance: number = 0.0;
  client!: Client;

  constructor(private clientService: ClientDataService) {}

  ngOnInit(): void {
    this.client = this.clientService.client;
    this.clientService.getClientBalance().subscribe({
      next: (value) => (this.balance = value),
      error: (err) => console.error(err),
      complete: () => {},
    });
  }
}
