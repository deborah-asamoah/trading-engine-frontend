import { Component, OnInit } from '@angular/core';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'app-dashboard-heading',
  templateUrl: './dashboard-heading.component.html',
  styleUrls: ['./dashboard-heading.component.scss'],
})
export class DashboardHeadingComponent implements OnInit {
  constructor(private clientService: ClientDataService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
