import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'admin-clients-list',
  templateUrl: './admin-clients-list.component.html',
  styleUrls: ['./admin-clients-list.component.scss']
})
export class AdminClientsListComponent {
  @ViewChild('content') element!: ElementRef;


  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

	open(content: any) {
		this.modalService.open(content, {
          // centered: true,
          scrollable: true,
          size: 'xl'
    });
	}

}
