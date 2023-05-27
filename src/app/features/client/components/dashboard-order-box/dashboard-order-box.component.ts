import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Order, { OrderSide, OrderType } from 'src/app/core/models/order.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import { ClientDataService } from 'src/app/shared/services/client-data.service';

@Component({
  selector: 'app-dashboard-order-box',
  templateUrl: './dashboard-order-box.component.html',
  styleUrls: ['./dashboard-order-box.component.scss'],
})
export class DashboardOrderBoxComponent implements OnInit {
  formGroup!: FormGroup;
  productList: string[] = [
    'GOOGL',
    'IBM',
    'MSFT',
    'AAPL',
    'TSLA',
    'ORCL',
    'AMZN',
  ];
  orderTypes: OrderType[] = [OrderType.LIMIT, OrderType.MARKET];
  orderSides: OrderSide[] = [OrderSide.BUY, OrderSide.SELL];
  portfolios: Portfolio[];

  constructor(private clientDataService: ClientDataService) {
    this.portfolios = clientDataService.portfolios;
  }


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      product: new FormControl<string>('', {
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
      side: new FormControl<string>('', {
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


  get product() {
    return this.formGroup.get("product")!;
  }

  get type() {
    return this.formGroup.get("type")!;
  }


  get side() {
    return this.formGroup.get("side")!;
  }


  get portfolioId() {
    return this.formGroup.get("portfolioId")!;
  }
  

  onSubmit(event: Event) {
    const form = <HTMLFormElement>event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      this.formGroup.markAllAsTouched();
      return;
    }

    this.clientDataService.createOrder(this.formGroup.value).subscribe((value) => console.log(value));
    form.reset();
  }


  onProductChange() {
    this.product.value
  }


  onPriceChange() {
    this.price.value
  }


  onTypeChange() {
    this.type.value
  }

  onSideChange() {
    this.side.value
  }

  onQuantityChange() {
    this.quantity.value
  }

  onPortfolioChange() {
    this.portfolioId.value
  }



}
