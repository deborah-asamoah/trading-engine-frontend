import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard-heading',
  templateUrl: './dashboard-heading.component.html',
  styleUrls: ['./dashboard-heading.component.scss'],
})
export class DashboardHeadingComponent {
  @Input() username = '';
  @Input() element!: TemplateRef<NgTemplateOutlet>;
  @Input() balance = 0.0;
  boundOpenOrderBoxModal = this.openOrderBoxModal.bind(this);

  constructor(private modalService: NgbModal) {}

  openOrderBoxModal() {
    this.modalService.open(this.element, {
      centered: true,
      scrollable: true,
    });
  }
}
