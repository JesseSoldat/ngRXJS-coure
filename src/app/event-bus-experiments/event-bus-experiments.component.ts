import { testLessons } from './../shared/model/test-lessons';
import { Component, OnInit } from '@angular/core';
import { globalEventBus} from './event-bus'; 


@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcasted all lesssons');
    globalEventBus.notifyObservers(testLessons);
  }

}


