import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EventBindingComponent } from './event-binding.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ClickDirective, ClickDirective2 } from './click.directive';
import { HighlightDirective } from './highlight.directive';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SizerComponent } from './two-way-binding/sizer/sizer.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { SvgAsTemplateComponent } from './svg-as-template/svg-as-template.component';
import { BigHeroDetailComponent, HeroDetailComponent } from './svg-as-template/hero-detail.component';
import { HeroFormComponent } from './svg-as-template/hero-form.component';
import { heroSwitchComponents } from './svg-as-template/hero-switch.component';
import { SvgComponent } from './svg-as-template/svg.component';

const routes: Routes = [
  { path: 'eventbinding', component: EventBindingComponent },
  { path: 'twowaybinding', component: TwoWayBindingComponent },
  { path: 'temp-vars', component: TemplateVariablesComponent },
  { path: 'svg-as-template', component: SvgAsTemplateComponent },
]

@NgModule({
  declarations: [
    EventBindingComponent,
    ItemDetailComponent,
    ClickDirective,
    ClickDirective2,
    HighlightDirective,
    TwoWayBindingComponent,
    SizerComponent,
    TemplateVariablesComponent,
    SvgAsTemplateComponent,
    SvgComponent,
    HeroDetailComponent,
    HeroFormComponent,
    BigHeroDetailComponent,
    heroSwitchComponents,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  bootstrap: [EventBindingComponent]
})
export class EventBindingModule { }
