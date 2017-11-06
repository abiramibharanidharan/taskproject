import { Component, ViewEncapsulation } from '@angular/core';
import { Task } from './taskclass/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers:[TaskService]
  
})
export class AppComponent {
  title = 'Task Project!';
   tasks: Task[];
  selectedTask: Task;
  addtask:boolean=false
  taskDetail:Task
  taskArray:Task[]
  Title:''
  Description:''
  CompletionDate:''
  public background_color="gray"
  public color:''
  constructor(private taskService: TaskService) { }
 
  getTasks(): void
  {
    this.tasks= this.taskService.getTasks()
  }

  ngOnInit(): void
  {
    this.getTasks();
  }

  onSelect(task: Task): void
  {
    this.selectedTask = task;
  }
  addTasks(values)
  {
    this.addtask=false
    var desc
    //check the description value is available or not
    if (values.Description == null)
    {
      desc = "Not available"
    }
    else
    {
      desc = values.Description
    }
   
    this.taskDetail={
     Title:values.Title,
     Description:desc,
     CompletionDate:values.CompletionDate
   }
    this.tasks.push(this.taskDetail)
    this.taskService.addTasks(this.taskDetail)
    this.taskArray=this.taskService.getTasks()
    
  }
   
  
  //reset the values to null
   resetForm()
  {
    this.Title='';
    this.Description='';
    this.CompletionDate='';
  }
  add()
  {
    this.addtask=true
    this.selectedTask=null
  }

  onchange(values)
  {
    
     var TodayDate=new Date()
     var inputDate=new Date(values)
     
     if(inputDate.setHours(0,0,0,0)>TodayDate.setHours(0,0,0,0))
      {
          this.background_color="yellow"
      }
      else if(inputDate.setHours(0,0,0,0)<TodayDate.setHours(0,0,0,0))
      {
           this.background_color="Red"
      }
       else
      {       
        this.background_color="green"
       } 
      
  }
 
   
}
