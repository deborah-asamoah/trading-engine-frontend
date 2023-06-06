import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientDataService } from 'src/app/shared/services/client-data/client-data.service';

@Component({
  selector: 'create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.scss']
})
export class CreatePortfolioComponent implements OnInit {

  @Input() modal?: NgbActiveModal;

  @Output() portfoliosOutput =  new EventEmitter();
  formGroup!: FormGroup;

  constructor(
    private clientDataService: ClientDataService,
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl<string>('', {
        validators: Validators.required,
        updateOn: 'submit',
      }),
    });
  }

  get name(): AbstractControl {
    return this.formGroup.get('name')!;
  }


  onSubmit(event: Event) {
    const form = <HTMLFormElement>event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      this.formGroup.markAllAsTouched();
      return;
    }
    this.clientDataService.createPortfolio(this.formGroup.value).subscribe((res: any) => {
      console.log(res)
      this.portfoliosOutput.emit();
      this.modal?.close()
    });
  }
}
