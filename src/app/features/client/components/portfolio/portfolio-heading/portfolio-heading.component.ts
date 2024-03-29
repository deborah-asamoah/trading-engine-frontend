import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'portfolio-heading',
  templateUrl: './portfolio-heading.component.html',
  styleUrls: ['./portfolio-heading.component.scss'],
})
export class PortfolioHeadingComponent implements OnInit {
  client!: Client;
  balance = 0.0;
  boundOpenOrderBoxModal = this.openOrderBoxModal.bind(this);
  @ViewChild('orderBox') element!: ElementRef;

  constructor(
    private clientDataService: ClientDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.client = this.clientDataService.client;
    this.clientDataService.getClientBalance().subscribe({
      next: (value) => (this.balance = value),
      error: (err) => console.error(err),
      complete: () => {},
    });
  }

  openOrderBoxModal() {
    this.modalService.open(this.element, {
      centered: true,
      scrollable: true,
    });
  }
}
