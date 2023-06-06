import { Component, OnInit } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  client!: Client;
  constructor(private clientDataService: ClientDataService) {}

  ngOnInit(): void {
    this.client = this.clientDataService.client;
  }
}
