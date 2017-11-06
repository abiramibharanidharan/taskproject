import { Component, Input } from '@angular/core';

import { Task } from '../taskclass/task';
@Component({
  selector: 'task-detail',
  templateUrl:'./task-detail.component.html',
  styleUrls:['./task-detail.component.css']
})

export class TaskDetailComponent
{
    @Input() task:Task
}