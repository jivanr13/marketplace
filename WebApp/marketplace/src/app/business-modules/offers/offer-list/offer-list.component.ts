import { Component, OnInit } from '@angular/core';
import {MarketplaceApiService} from '../../../core/marketplace-api/marketplace-api.service';
import {BlockUIService} from '../../../core/services/block-ui.service';
import {OfferModel} from '../../../core/marketplace-api/models/offer.model';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  listOffers: OfferModel[];
  listOffersTemmp: OfferModel[] = [];

  constructor(private marketplaceApiService: MarketplaceApiService,
              private blockUIService: BlockUIService) { }

  ngOnInit(): void {
    this.blockUIService.startBlock();
    this.marketplaceApiService.getOffers().subscribe(result => {
      this.listOffers = result;
      this.blockUIService.endBlock();
    });
  }


}
