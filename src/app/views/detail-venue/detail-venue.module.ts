import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailVenuePageRoutingModule } from './detail-venue-routing.module';

import { DetailVenuePage } from './detail-venue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailVenuePageRoutingModule
  ],
  declarations: [DetailVenuePage]
})
export class DetailVenuePageModule {}
