import { Component, OnInit } from '@angular/core';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-detail-venue',
  templateUrl: './detail-venue.page.html',
  styleUrls: ['./detail-venue.page.scss'],
})
export class DetailVenuePage implements OnInit {

  v: any;
  venue: any={};

  constructor(private ve: VenueService) { }

  ngOnInit() {
    let ve = JSON.parse(localStorage.getItem("venue") as string);
    this.recuperVenue(ve);
    console.log(this.recuperVenue(ve));
    console.log("eeeee",ve); 
  }

  recuperVenue(id: any){
    this.ve.getVenue(id).subscribe((rep: any)=>{
      this.v = rep;
      console.log("tttt",this.v);
      this.venue.city = this.v.city
      this.venue.address = this.v.address
      this.venue.id = this.v.id
      this.venue.display_location = this.v.display_location
      this.venue.metro_code = this.v.metro_code
      this.venue.postal_code = this.v.postal_code
      this.venue.url = this.v.url
      this.venue.timezone = this.v.timezone
      this.venue.name = this.v.name
    })
  }

}
