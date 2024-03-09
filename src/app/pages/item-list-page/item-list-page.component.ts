import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { PortalItem } from 'src/app/models/portal-item';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ItemsData } from 'src/app/data/items.data';
import { ItemsMediator } from 'src/app/services/items.mediator';

@Component({
  selector: 'item-list-page',
  standalone: true,
  imports: [ButtonModule, CommonModule, ConfirmDialogModule, FormsModule, MessagesModule, RouterModule],
  templateUrl: './item-list-page.component.html',
  styleUrls: ['./item-list-page.component.scss'],
  providers: [ItemsData, ItemsMediator],
})
export class ItemListPageComponent implements OnInit {
  itemList$: Observable<PortalItem[]> = this._mediator.itemsList$;
  msgs: Message[] = [];

  constructor(private _mediator: ItemsMediator) {}

  ngOnInit(): void {
    this._mediator.init();
  }
}
