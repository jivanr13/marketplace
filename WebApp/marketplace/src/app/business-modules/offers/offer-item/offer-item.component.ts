import {Component, Input, OnInit} from '@angular/core';
import {OfferModel} from '../../../core/marketplace-api/models/offer.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent implements OnInit {

  @Input()
  offer: OfferModel;
  @Input()
  idx: number

  constructor() { }

  ngOnInit(): void {
  }

}
