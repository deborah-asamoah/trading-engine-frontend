import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Client from 'src/app/core/models/client.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'portfolio-list',
  templateUrl: './portfolios-list.component.html',
  styleUrls: ['./portfolios-list.component.scss'],
})

export class PortfoliosListComponent implements OnInit {
  client!: Client;
	@Input() portfolios: Portfolio[] = [];
  @ViewChild('content') element!: ElementRef;


  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  // openOrderBoxModal() {
  //   this.modalService.open(this.element, {
  //     centered: true,
  //     scrollable: true,
  //   });
  // }

	open(content: any) {
		this.modalService.open(content, {
          // centered: true,
          scrollable: true,
          size: 'lg'
        });
	}

}
