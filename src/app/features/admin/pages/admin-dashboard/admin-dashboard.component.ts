import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  // client!: Client;

  constructor(
    // private clientDataService: ClientDataService,
  ) {}

  ngOnInit(): void {
    // this.client = this.clientDataService.client;
  }


}
