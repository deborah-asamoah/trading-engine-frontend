import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Client from 'src/app/core/models/client.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Portfolio from 'src/app/core/models/portfolio.model';
@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent implements OnInit {
  client!: Client;
  portfolios: Portfolio[] = [];

  @Input() onClick: () => void = () => {};
  @ViewChild('content') element!: ElementRef;


  constructor(
    private clientDataService: ClientDataService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.client = this.clientDataService.client;

    this.clientDataService.getPortfolios().subscribe(
			res => {
			this.portfolios = res.portfolioDTOS;
			console.log(this.portfolios);
		})
  }



  closeResult = '';

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


  handlePortfolioCreated () {
    this.clientDataService.getPortfolios().subscribe(
			res => {
			this.portfolios = res.portfolioDTOS;
		})
  }
}
