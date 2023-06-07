import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss']
})
export class AdminBaseComponent {
  // client!: Client;
  // constructor(private clientDataService: ClientDataService) {}

  ngOnInit(): void {
    // this.client = this.clientDataService.client;
  }

}
