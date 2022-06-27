import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';

import { InteractionModule } from './interaction/interaction.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { DynamicComponentLoaderModule } from './dynamic-component-loader/dynamic-component-loader.module';
import { EventBindingModule } from './event-binding/event-binding.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    AppRoutingModule,
    InteractionModule,
    ContentProjectionModule,
    DynamicComponentLoaderModule,
    EventBindingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
