import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenueListPageRoutingModule } from './venue-list-routing.module';

import { VenueListPage } from './venue-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VenueListPageRoutingModule
  ],
  declarations: [VenueListPage]
})
export class VenueListPageModule {}
