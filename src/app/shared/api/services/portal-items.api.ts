import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortalItemCreate } from 'src/app/models/portal-item-create';
import { PortalDataCard } from 'src/app/models/portal-data-card';

@Injectable({ providedIn: 'root' })
export class PortalItemsApi {
  constructor(private _http: HttpClient) {}
  configUrl: string = '/assets/db.json';

  getList(): Observable<PortalDataCard> {
    return this._http.get<PortalDataCard>(this.configUrl);
  }

  create(model: PortalItemCreate): Observable<PortalItemCreate> {
    return this._http.post<PortalItemCreate>(this.configUrl, model);
  }
}
