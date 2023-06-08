import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() portfoliosOutput =  new EventEmitter();
  @ViewChild('content') element!: ElementRef;


  constructor(
    private modalService: NgbModal,
    private clientDataService: ClientDataService
  ) {}

  ngOnInit(): void {}

	open(content: any) {
		this.modalService.open(content, {
          // centered: true,
          scrollable: true,
          size: 'lg'
    });
    console.log(this.portfolios)
	}

  deletePortfolio(portfolioId: string){
    console.log(portfolioId)
    this.clientDataService.deletePortfolio(portfolioId).subscribe((res:any) => {
      this.portfoliosOutput.emit();
    })
  }

}
