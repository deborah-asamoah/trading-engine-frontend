import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  boundOpenOrderBoxModal = this.openOrderBoxModal.bind(this);
  @ViewChild('orderBox') element!: ElementRef;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openOrderBoxModal() {
    this.modalService.open(this.element, {
      centered: true,
      scrollable: true,
    });
  }
}
