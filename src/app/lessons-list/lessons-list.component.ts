import { Component, OnInit } from '@angular/core';

import { Lesson } from './../shared/model/lesson';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from './../event-bus-experiments/event-bus';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = [];

  constructor() {
    console.log('lesson list is registered as a listener ');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
   }

  ngOnInit() {
              
  }

  notify(data: Lesson[]) {
    console.log('lessons list component received data');
    this.lessons = data;
  }

  select() {}

}


