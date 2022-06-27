import { Component, OnInit } from '@angular/core';

import { AdService } from './ad.service';
import { AdItem } from './interfaces';
@Component({
  selector: 'app-dynamic-component-loader',
  template: `
    <div>
      <app-ad-banner [ads]="ads"></app-ad-banner>
    </div>
  `
})
export class DynamicComponentLoaderComponent implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
