import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionComponent } from './content-projection.component';
import { SingleSlotComponent } from './single-slot.component';
import { MultiSlotComponent } from './multi-slot.component';
import { ConditionalComponent } from './conditional.component';

@NgModule({
  declarations: [
    ContentProjectionComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    ConditionalComponent,
  ],
  imports: [
    CommonModule,
    ContentProjectionRoutingModule
  ]
})
export class ContentProjectionModule { }
