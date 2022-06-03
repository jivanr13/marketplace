import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MarketplaceApiService} from '../../../core/marketplace-api/marketplace-api.service';
import {BlockUIService} from '../../../core/services/block-ui.service';
import {Routes} from '../../../data/routes/routes';
import {AppNotifyService} from '../../../core/services/app-notify.service';
import {Router} from '@angular/router';
import {Category} from '../offers.models';
import {AuthUserSettingsService} from '../../../core/services/auth-user-settings.service';

@Component({
  selector: 'app-offer-creation',
  templateUrl: './offer-creation.component.html',
  styleUrls: ['./offer-creation.component.scss']
})
export class OfferCreationComponent implements OnInit {
  offerForm: FormGroup;

  categories: Category[] = [];

  constructor(private marketplaceApiService: MarketplaceApiService,
              private blockUIService: BlockUIService,
              private fb: FormBuilder,
              private appNotifyService: AppNotifyService,
              private router: Router,
              private authUserSettingsService: AuthUserSettingsService
              ) { }

  ngOnInit(): void {
    this.initForm();
    this.blockUIService.startBlock();
    this.marketplaceApiService.getCategories().subscribe(result => {
      this.categories = result;
      this.blockUIService.endBlock();
    });
  }

  async offerSubmit() {
    for (const c in this.offerForm.controls)
      this.offerForm.controls[c].markAsTouched();

    if (this.offerForm.valid) {
      if (!await this.appNotifyService.showConfirmarEnviar()) {
        return;
      }
      const offer = this.offerForm.getRawValue();
      offer.userName = this.authUserSettingsService.UserName;

      this.blockUIService.startBlock();
      this.marketplaceApiService.postOffer(offer).subscribe(result => {
        this.appNotifyService.showNotify('offer submited', '');
        this.blockUIService.endBlock();
        this.router.navigate([`/${Routes.OFFERS.LIST}`]);
      });
    }
  }

  private initForm(): void {
    this.offerForm = this.fb.group({
      title: ['', Validators.required],
      pictureUrl: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      categoryId: [null, Validators.required]
    });
  }
  public get fControls() {
    return this.offerForm.controls;
  }
}
