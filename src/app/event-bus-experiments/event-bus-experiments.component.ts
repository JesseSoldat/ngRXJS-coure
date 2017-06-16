import { testLessons } from './../shared/model/test-lessons';
import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON} from './event-bus'; 


@Component({
  selector: 'event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcasted all lesssons');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, 
    testLessons.slice(0));
  }

  addLesson(lessonText: string) {
    console.log(lessonText); 
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}


