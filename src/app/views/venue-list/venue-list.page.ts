import { Component, OnInit } from '@angular/core';
import { VenueService } from 'src/app/service/venue.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.page.html',
  styleUrls: ['./venue-list.page.scss'],
})
export class VenueListPage implements OnInit {

  response: any;
  venues: any[]=[]
  term: any="";

  constructor(private venue: VenueService) { }

  ngOnInit() {
    this.venue.getDataVenues().subscribe((rep)=>{
      this.response=rep; 
      this.venues=this.response.venues;
      console.log(this.venues);    
    });
  }

  getVenue(venue: any){
    localStorage.setItem("venue", JSON.stringify(venue));
    console.log(venue);
    
  }

}
