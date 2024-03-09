import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortalItemCreate } from 'src/app/models/portal-item-create';
import { PortalDataCardDto } from '../models/portal-data-card.dto';

@Injectable({ providedIn: 'root' })
export class PortalItemsApi {
  constructor(private _http: HttpClient) {}
  configUrl: string = '/assets/db.json';

  getList(): Observable<PortalDataCardDto> {
    return this._http.get<PortalDataCardDto>(this.configUrl);
  }

  create(model: PortalItemCreate): Observable<PortalItemCreate> {
    return this._http.post<PortalItemCreate>(this.configUrl, model);
  }
}
