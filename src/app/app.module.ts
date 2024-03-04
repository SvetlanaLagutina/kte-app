import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgFor } from '@angular/common';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogService } from 'primeng/dynamicdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemCreatePageComponent, ItemListPageComponent, DetailsPageComponent, TopBarComponent } from '@pages';
import { FieldErrorComponent } from './shared/uikit/field-error/field-error.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ItemCreatePageComponent,
    ItemListPageComponent,
    DetailsPageComponent,
    TopBarComponent,

    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    FieldErrorComponent,
    ConfirmDialogModule,
  ],
  providers: [MessageService, ConfirmationService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
