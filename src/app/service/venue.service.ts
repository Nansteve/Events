import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  constructor(private http: HttpClient) { }

  getDataVenues(){
    return this.http.get('https://api.seatgeek.com/2/venues?client_id=MzE0MTMxMDR8MTY3MzI3Nzg2OC4yNzEzNDA2');
  }

  getVenue(id: any){
    return this.http.get(`https://api.seatgeek.com/2/venues/${id}?client_id=MzE0MTMxMDR8MTY3MzI3Nzg2OC4yNzEzNDA2`);
  }
}
