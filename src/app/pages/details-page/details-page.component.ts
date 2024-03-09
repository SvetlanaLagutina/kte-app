import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';
import { Message } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortalItem } from 'src/app/models/portal-item';
import { ItemsData } from 'src/app/data/items.data';
import { ItemsMediator } from 'src/app/services/items.mediator';

@Component({
  selector: 'details-page',
  standalone: true,
  imports: [CommonModule, FormsModule, MessagesModule, RouterModule],
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
  providers: [ItemsData, ItemsMediator],
})
export class DetailsPageComponent implements OnInit {
  itemCard: PortalItem | undefined;
  itemId!: number;
  msgs: Message[] = [];

  constructor(
    private _mediator: ItemsMediator,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._mediator.init();
    this.itemId = Number(this._route.snapshot.params['id']);
    this.getProducts();
  }

  getProducts(): void {
    this._mediator.itemsList$
      .pipe(
        map((data: PortalItem[]) => {
          this.itemCard = data.find(item => item.id === this.itemId);
        }),
      )
      .subscribe();
  }
}
