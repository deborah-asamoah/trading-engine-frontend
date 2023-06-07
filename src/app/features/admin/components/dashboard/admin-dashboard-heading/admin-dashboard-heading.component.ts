import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-dashboard-heading',
  templateUrl: './admin-dashboard-heading.component.html',
  styleUrls: ['./admin-dashboard-heading.component.scss']
})
export class AdminDashboardHeadingComponent {
  @Input() name = '';

}
