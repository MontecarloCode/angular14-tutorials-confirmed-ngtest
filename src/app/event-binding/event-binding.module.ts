import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EventBindingComponent } from './event-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ClickDirective } from './click.directive';
import { HighlightDirective } from './highlight.directive';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SizerComponent } from './two-way-binding/sizer/sizer.component';

const routes: Routes = [
  { path: 'eventbinding', component: EventBindingComponent},
  { path: 'twowaybinding', component: TwoWayBindingComponent}
]

@NgModule({
  declarations: [
    EventBindingComponent,
    ItemDetailComponent,
    ClickDirective,
    HighlightDirective,
    TwoWayBindingComponent,
    SizerComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [EventBindingComponent]
})
export class EventBindingModule { }
