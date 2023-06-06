import { Component, OnInit } from '@angular/core';
import Portfolio from 'src/app/core/models/portfolio.model';
import PortfolioListDTO from 'src/app/shared/models/portfolioListDTO.model';
import { ClientDataService } from 'src/app/shared/services/client-data.service';

@Component({
  selector: 'portfolio-list',
  templateUrl: './portfolios-list.component.html',
  styleUrls: ['./portfolios-list.component.scss'],
})

export class PortfoliosListComponent implements OnInit {
	portfolios: Portfolio[] = [];
	constructor(private clientDataService: ClientDataService) {}

	ngOnInit(): void {
		this.clientDataService.getPortfolios().subscribe(
			res => {
			this.portfolios = res.portfolioDTOS;
		})

	  }

}
