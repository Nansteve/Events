import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  event: any;
  reponse: any;

  constructor(private eventservice: EventService) { }

  ngOnInit() {
    this.eventservice.getDataEvents().subscribe((rep)=>{
      console.log("");
      this.reponse=rep;
      this.event=this.reponse.events; 
      console.log(rep);    
    });
  }
  getEvenement(event: any){
    localStorage.setItem("event", JSON.stringify(event));
   // console.log(event);
  }

}
