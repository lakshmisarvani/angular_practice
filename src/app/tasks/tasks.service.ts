import { Injectable } from "@angular/core";
import type{ NewTaskData } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TasksService{
   private tasks = [
    {
      id:'t1',
      userId:'u1',
      title: 'master angular',
      summary : 'Learn all the basic and advanced features of Angular and how to apply them',
      dueDate: '2026-03-29'
    },
    {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2026-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2026-06-15',
  },
  ];

  //localStorage code
  constructor(){
    const tasks=localStorage.getItem('tasks');

    if(tasks){
      this.tasks=JSON.parse(tasks);
    }
  }
  
  getUserTask(userId: string){
    return this.tasks.filter((t)=>t.userId===userId);
  }

  addTask(taskData : NewTaskData,userId:string){
    this.tasks.push({ //instead of push,we can use this.tasks.unshift
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
     })
     this.saveTasks();
  }

  removeTask(id:string){
    this.tasks=this.tasks.filter((t)=> t.id!==id);
    this.saveTasks();
  }
  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  
  
}