import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-order-box',
  templateUrl: './dashboard-order-box.component.html',
  styleUrls: ['./dashboard-order-box.component.scss'],
})
export class DashboardOrderBoxComponent implements OnInit {
  formGroup!: FormGroup;
  stockList: string[] = [
    'GOOGL',
    'IBM',
    'MSFT',
    'AAPL',
    'TSLA',
    'ORCL',
    'AMZN',
  ];

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      stock: new FormControl<string>(''),
      price: new FormControl<number>(0.0),
      quantity: new FormControl<number>(0.0),
      type: new FormControl<string>(''),
      portfolioId: new FormControl<number | null>(null),
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }
}
