import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient) { }

  getDataEvents(){
    return this.http.get('https://api.seatgeek.com/2/events?client_id=MzE0MTMxMDR8MTY3MzI3Nzg2OC4yNzEzNDA2')
  }
  getEvent(id: any){
    return this.http.get(`https://api.seatgeek.com/2/events/${id}?client_id=MzE0MTMxMDR8MTY3MzI3Nzg2OC4yNzEzNDA2`);
  }
}
