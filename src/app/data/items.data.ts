import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PortalDataCardDto, PortalItemsApi } from '@shared/api';
import { PortalDataCard } from '../models/portal-data-card';
import { ItemsAdapter } from './items.adapter';

@Injectable()
export class ItemsData {
  constructor(private _portalItemsApi: PortalItemsApi) {}

  getList(): Observable<PortalDataCard> {
    return this._portalItemsApi.getList().pipe(map((dto: PortalDataCardDto) => ItemsAdapter.toItemList(dto)));
  }
}
