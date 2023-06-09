import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import ClientDto from '../../../models/clientDto';

@Component({
  selector: 'admin-clients-list',
  templateUrl: './admin-clients-list.component.html',
  styleUrls: ['./admin-clients-list.component.scss']
})
export class AdminClientsListComponent {
  @Input() clients: ClientDto[] = [];
  @ViewChild('content') element!: ElementRef;

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    console.log(this.clients);
  }

	open(content: any) {
		this.modalService.open(content, {
          // centered: true,
          scrollable: true,
          size: 'xl'
    });
	}

}
