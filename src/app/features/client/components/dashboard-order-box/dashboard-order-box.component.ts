import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderType } from 'src/app/core/models/order.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import { ClientDataService } from 'src/app/shared/services/client-data.service';

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
  orderTypes: OrderType[] = [OrderType.LIMIT, OrderType.MARKET];
  portfolios: Portfolio[];
  constructor(private clientDataService: ClientDataService) {
    this.portfolios = clientDataService.portfolios;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      stock: new FormControl<string>('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
      price: new FormControl<number | null>(null, {
        validators: Validators.compose([
          Validators.required,
          Validators.min(1),
        ]),
        updateOn: 'submit',
      }),
      quantity: new FormControl<number | null>(null, {
        validators: Validators.compose([
          Validators.required,
          Validators.min(1),
        ]),
        updateOn: 'submit',
      }),
      type: new FormControl<string>('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'submit',
      }),
      portfolioId: new FormControl<number | null>(0, {
        validators: Validators.compose([Validators.required]),
        updateOn: 'submit',
      }),
    });
  }

  get price(): AbstractControl {
    return this.formGroup.get('price')!;
  }
  get quantity(): AbstractControl {
    return this.formGroup.get('quantity')!;
  }

  onSubmit(event: Event) {
    const form = <HTMLFormElement>event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log(this.formGroup.value);
    form.reset();
  }
}
