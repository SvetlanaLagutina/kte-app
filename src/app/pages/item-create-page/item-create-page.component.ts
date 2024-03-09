import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PortalItemCreate } from 'src/app/models/portal-item-create';
import { FieldErrorComponent } from '@shared/uikit';
import { PortalItemsApi } from '@shared/api';

@Component({
  selector: 'item-create-page',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FieldErrorComponent,
  ],
  templateUrl: './item-create-page.component.html',
  styleUrls: ['./item-create-page.component.scss'],
})
export class ItemCreatePageComponent {
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
    country: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
    shop: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
    photo: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl<string>('', [Validators.required, Validators.maxLength(255)]),
  });

  constructor(private _portalItemsApi: PortalItemsApi) {}

  submit(): void {
    this._portalItemsApi.create(this.form.value as PortalItemCreate);
    console.log('PortalItemCreate', this.form.value);
    this.form.reset();
  }
}
