import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailVenuePage } from './detail-venue.page';

const routes: Routes = [
  {
    path: '',
    component: DetailVenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailVenuePageRoutingModule {}
