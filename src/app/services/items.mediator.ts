import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter, map, tap } from 'rxjs';
import { ItemsData } from '../data/items.data';
import { Message } from 'primeng/api';
import { PortalItem } from '../models/portal-item';

@Injectable()
export class ItemsMediator {
  private _itemsList$ = new BehaviorSubject<PortalItem[] | null>(null);
  msgs: Message[] = [];

  itemsList$: Observable<PortalItem[]> = this._itemsList$.pipe(
    filter(value => !!value),
    map(value => value as PortalItem[]),
  );

  constructor(private _data: ItemsData) {}

  init(): void {
    this._fetch();
  }

  private _fetch(): void {
    this._data
      .getList()
      .pipe(
        tap({
          next: list => this._itemsList$.next(list.cards),
          error: () =>
            (this.msgs = [
              {
                severity: 'error',
                summary: 'Ошибка!',
                detail: 'Неизвестная ошибка',
              },
            ]),
        }),
      )
      .subscribe();
  }
}
