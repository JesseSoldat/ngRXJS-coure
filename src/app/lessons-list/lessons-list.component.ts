import { Component, OnInit } from '@angular/core';

import { Lesson } from './../shared/model/lesson';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './../event-bus-experiments/event-bus';

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
    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.floor(Math.random() * 1000),
          description: lessonText,
          duration: this.createDuration()
        })
      }
    });
   }

  ngOnInit() {
              
  }

  createDuration() {
    let duration = Math.floor(Math.random() * 1000).toString();

    if(duration.length === 2) {
      duration = "" + duration + "0";
      return duration.slice(0,1) + ':' + duration.slice(1);
    }
    return duration.slice(0,1) + ':' + duration.slice(1);
  }

  notify(data: Lesson[]) {
    console.log('lessons list component received data');
    console.log(data);
    this.lessons = data;
    
  }

  select() {}

}


