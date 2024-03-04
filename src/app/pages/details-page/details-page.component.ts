import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortalItem } from 'src/app/models/portal-item';
import { PortalItemsApi } from '@shared/api';
import { PortalDataCard } from 'src/app/models/portal-data-card';

@Component({
  selector: 'details-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  itemList: PortalItem[] = [];
  itemCard: PortalItem | undefined;
  itemId!: number;

  constructor(
    private _portalItemsApi: PortalItemsApi,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.itemId = Number(this._route.snapshot.params['id']);
  }

  getProducts(): void {
    this._portalItemsApi
      .getList()
      .pipe(
        map((data: PortalDataCard) => {
          this.itemList = data.cards;
          this.itemCard = this.itemList.find(item => item.id === this.itemId);
        }),
      )
      .subscribe();
  }
}
