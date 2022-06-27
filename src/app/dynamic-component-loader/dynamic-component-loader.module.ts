import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner.component';
import { DynamicComponentLoaderComponent } from './dynamic-component-loader.component';

const routes: Routes = [
  {path: 'dynamic', component: DynamicComponentLoaderComponent}
]

@NgModule({
  declarations: [
    AdDirective,
    AdBannerComponent,
    DynamicComponentLoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [ DynamicComponentLoaderComponent ]
})
export class DynamicComponentLoaderModule { }
