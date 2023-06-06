import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'portfolio-stock-list',
  templateUrl: './portfolio-stock-list.component.html',
  styleUrls: ['./portfolio-stock-list.component.scss']
})
export class PortfolioStockListComponent implements OnInit {

  @Input() modal?: NgbActiveModal;


  constructor(
  ) {}

  ngOnInit(): void {
  }


}
