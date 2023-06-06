import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import APIException from 'src/app/core/models/api-exception.model';
import { OrderSide, OrderType } from 'src/app/core/models/order.model';
import Portfolio from 'src/app/core/models/portfolio.model';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';
import { ToastService } from 'src/app/shared/services/toast-service/toast-service.service';

@Component({
  selector: 'app-dashboard-order-box',
  templateUrl: './dashboard-order-box.component.html',
  styleUrls: ['./dashboard-order-box.component.scss'],
})
export class DashboardOrderBoxComponent implements OnInit {
  @Input() modal?: NgbActiveModal;
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
  portfolios: Portfolio[] = [];
  isLoading = false;

  constructor(
    private clientDataService: ClientDataService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      product: new FormControl<string>('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
      price: new FormControl<number | null>(null, {
        validators: Validators.compose([Validators.required]),
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
      portfolioId: new FormControl<string | null>('', {
        validators: Validators.compose([Validators.required]),
        updateOn: 'submit',
      }),
    });

    this.clientDataService.getPortfolios().subscribe((res) => {
      this.portfolios = res.portfolioDTOS;
    });
  }

  get price(): AbstractControl {
    return this.formGroup.get('price')!;
  }

  get quantity(): AbstractControl {
    return this.formGroup.get('quantity')!;
  }

  get product() {
    return this.formGroup.get('product')!;
  }

  get type() {
    return this.formGroup.get('type')!;
  }

  get side() {
    return this.formGroup.get('side')!;
  }

  get portfolioId() {
    return this.formGroup.get('portfolioId')!;
  }

  onSubmit(event: Event) {
    const form = <HTMLFormElement>event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      this.formGroup.markAllAsTouched();
      return;
    }
    this.isLoading = true;

    this.clientDataService.createOrder(this.formGroup.value).subscribe({
      next: (value) => {
        this.toastService.show('Your order has been placed successfully', {
          classname: 'bg-success text-light lead',
          delay: 10000,
          header: 'Order Submitted',
        });
        this.formGroup.reset();
        this.modal?.close();
      },
      error: (err: APIException) => {
        this.toastService.show(err.message, {
          classname: 'bg-danger text-light',
          delay: 15000,
          header: err.error,
        });
      },
      complete: () => (this.isLoading = false),
    });
  }
}
