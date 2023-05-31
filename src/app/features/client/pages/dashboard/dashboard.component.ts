import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  boundOpenOrderBoxModal = this.openOrderBoxModal.bind(this);
  @ViewChild('orderBox') element!: ElementRef;

  constructor(
    private clientDataService: ClientDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.client = this.clientDataService.client;
  }

  openOrderBoxModal() {
    this.modalService.open(this.element, {
      centered: true,
      scrollable: true,
    });
  }
}
