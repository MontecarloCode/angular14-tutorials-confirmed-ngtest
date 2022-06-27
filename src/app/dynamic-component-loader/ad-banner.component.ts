import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { AdItem, AdComponent } from './interfaces';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adHost></ng-template>
    </div>
  `,
  styles: [`
    /* .ad-banner-example {
      width: 400px;
    } */
  `]
})

export class AdBannerComponent implements OnInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval!: any;

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}