import { Component, OnInit, Output } from '@angular/core';
import ClientDto from '../../models/clientDto';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.scss']
})
export class AdminClientsComponent implements OnInit {
  @Output() clients: ClientDto[] = [];

  constructor(
    private adminService: AdminServiceService,
  ) {}

  ngOnInit(): void {

    this.adminService.getClients().subscribe(
      res => {
        this.clients = (res as  ClientDto[]);
      }
    )
  }

}
