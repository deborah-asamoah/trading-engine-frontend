import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import Client from 'src/app/core/models/client.model';
import { AuthClientService } from 'src/app/shared/services/auth-client/auth-client.service';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';
import APIException from 'src/app/core/models/api-exception.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup | any;
  submitted = false;

  private client!: Client;

  errorMessage!: string;
  errorCode!: number;

  constructor(
    private authClientService: AuthClientService,
    private clientService: ClientDataService,
    public location: Location,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string>('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
      email: new FormControl<string>('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
      password: new FormControl<string>('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
    });
  }

  get name() {
    return this.formGroup.get('name')!;
  }

  get email() {
    return this.formGroup.get('email')!;
  }

  get password() {
    return this.formGroup.get('password')!;
  }

  onSubmit(event: Event) {
    const form = <HTMLFormElement>event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log(this.formGroup.value);

    this.authClientService.registerClient(this.formGroup.value).subscribe({
      next: (res: any) => {
        this.authClientService.setToken(res.accessToken);
        this.client = new Client(res.id, res.name, res.email, res.role);
        this.clientService.client = this.client;

        if (res.role == 'USER') {
          this.location.replaceState('/client/dashboard');
          this.router.navigate(['client/dashboard']);
        } else if (res.role == 'ADMIN') {
          this.location.replaceState('/admin/dashboard');
          this.router.navigate(['admin/dashboard']);
        }
      },

      error: (err: APIException) => {
        this.errorMessage = err.message;
        this.errorCode = err.statusCode;
      },
    });

    this.formGroup.reset();
  }

  onNameChange() {
    this.name.value;
  }

  onEmailChange() {
    this.email.value;
  }

  onPasswordChange() {
    this.password.value;
  }
}
