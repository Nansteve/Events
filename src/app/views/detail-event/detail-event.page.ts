import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.page.html',
  styleUrls: ['./detail-event.page.scss'],
})
export class DetailEventPage implements OnInit {

  e: any;
  event: any={}


  constructor(private ev : EventService) { }

  ngOnInit() {
    let ev = JSON.parse(localStorage.getItem("event") as string);
    this.recupereEvent(ev);
    console.log(this.recupereEvent(ev));
    console.log(ev); 
    console.log(this.event);
    
  }

  recupereEvent(id: any){
    this.ev.getEvent(id).subscribe((rep: any)=>{
      this.e = rep;
      this.event.announce_date = this.e.announce_date
      this.event.created_at = this.e.created_at
      this.event.id = this.e.id
      this.event.datetime_local = this.e.datetime_local
      this.event.short_title = this.e.short_title
      this.event.type = this.e.type
      this.event.url = this.e.url
      this.event.venue = this.e.venue
    })
  }
}

