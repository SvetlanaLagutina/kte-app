import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortalItem } from 'src/app/models/portal-item';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PortalItemsApi } from '@shared/api';
import { PortalDataCard } from 'src/app/models/portal-data-card';

@Component({
  selector: 'item-list-page',
  standalone: true,
  imports: [ButtonModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './item-list-page.component.html',
  styleUrls: ['./item-list-page.component.scss'],
})
export class ItemListPageComponent implements OnInit {
  itemList: PortalItem[] = [];
  constructor(private _portalItemsApi: PortalItemsApi) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._portalItemsApi
      .getList()
      .pipe(
        map((data: PortalDataCard) => {
          this.itemList = data.cards;
        }),
      )
      .subscribe();
  }
}
