import { PortalItemDto, PortalDataCardDto } from '@shared/api';
import { PortalItem } from '../models/portal-item';
import { PortalDataCard } from '../models/portal-data-card';

export class ItemsAdapter {
  static toItem = (dto: PortalItemDto): PortalItem => {
    return {
      id: dto.id,
      name: dto.name,
      country: dto.country,
      shop: dto.shop,
      photo: dto.photo,
      price: dto.price,
    };
  };

  static toItemList(dto: PortalDataCardDto): PortalDataCard {
    return {
      cards: dto.cards.map(i => this.toItem(i)),
    };
  }
}
