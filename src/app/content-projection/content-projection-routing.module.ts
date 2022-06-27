import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentProjectionComponent } from './content-projection.component';
import { SingleSlotComponent } from './single-slot.component';
import { MultiSlotComponent } from './multi-slot.component';

const routes: Routes = [
  { path: 'projection', component: ContentProjectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentProjectionRoutingModule { }
