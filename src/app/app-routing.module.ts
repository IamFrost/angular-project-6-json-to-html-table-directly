import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayListComponent } from './display-list/display-list.component';
import { ZoneEntryComponent } from './zone-entry/zone-entry.component';
import { AnimalEntryComponent } from './animal-entry/animal-entry.component';

const routes: Routes = [
  {
    path: 'display-list',
    component: DisplayListComponent
  },
  {
    path: 'zone-entry',
    component: ZoneEntryComponent
  },
  {
    path: 'animal-entry',
    component: AnimalEntryComponent
  },
  {
    path: '',
    redirectTo: 'zone-entry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
