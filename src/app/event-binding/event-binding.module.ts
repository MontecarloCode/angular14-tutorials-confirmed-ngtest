import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EventBindingComponent } from './event-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ClickDirective } from './click.directive';
import { HighlightDirective } from './highlight.directive';

const routes: Routes = [
  { path: 'eventbinding', component: EventBindingComponent}
]
@NgModule({
  declarations: [
    EventBindingComponent,
    ItemDetailComponent,
    ClickDirective,
    HighlightDirective
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [EventBindingComponent]
})
export class EventBindingModule { }
