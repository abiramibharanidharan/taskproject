import { Injectable } from '@angular/core';

import { Task } from './taskclass/task';
import { TASKS } from './taskclass/mock-tasks';

@Injectable()
export class TaskService
{
    taskList:Task[]=[]
  getTasks(): Task[]
  {
    return TASKS
  }
addTasks(taskDetail:Task)
  {
      this.taskList.unshift(taskDetail)
  }
 
}