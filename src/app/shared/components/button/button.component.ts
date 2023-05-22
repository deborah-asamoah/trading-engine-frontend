import { Component, Input } from '@angular/core';

type Color = 'red' | 'green';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: Color = 'green';
  @Input() type: string = 'submit';
}
