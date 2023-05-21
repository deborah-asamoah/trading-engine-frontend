import { Component } from '@angular/core';
import Client from 'src/app/core/models/client.model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  client = new Client('gerald-tetteh');
}
