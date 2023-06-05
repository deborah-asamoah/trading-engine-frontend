import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthClientService } from 'src/app/shared/services/auth-client/auth-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup | any;
  submitted = false;

  constructor (private authClientService: AuthClientService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string>(
        '', 
        {
          validators: Validators.required,
          updateOn: 'submit',
        }
      ),
      email: new FormControl<string>(
        '', 
        {
          validators: Validators.required,
          updateOn: 'submit',
        }
      ),
      password: new FormControl<string>(
        '', 
        {
          validators: Validators.required,
          updateOn: 'submit',
        }
      ),
    })
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
    this.authClientService.registerClient(this.formGroup.value);
    this.formGroup.reset();
  }

  onNameChange() {
    this.name.value
  }

  onEmailChange() {
    this.email.value
  }

  onPasswordChange() {
    this.password.value
  }

}
