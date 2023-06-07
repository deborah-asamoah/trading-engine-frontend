import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-heading',
  templateUrl: './dashboard-heading.component.html',
  styleUrls: ['./dashboard-heading.component.scss'],
})
export class DashboardHeadingComponent {
  @Input() name = '';
  @Input() balance = 0.0;

  constructor() {}
}
