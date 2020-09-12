import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayListComponent } from './display-list/display-list.component';
import { ZoneEntryComponent } from './zone-entry/zone-entry.component';
import { AnimalEntryComponent } from './animal-entry/animal-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayListComponent,
    ZoneEntryComponent,
    AnimalEntryComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
