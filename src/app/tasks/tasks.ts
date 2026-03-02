import { Component,Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import type { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service'; 
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  // @Input({required: true}) name!:string;
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask=false;
  //private tasksService: TasksService;

  constructor( private tasksService: TasksService){ //dependency injection
    /* telling angular which type of value you need 
    and Angular creates it and provides it as an argument */
  //  this.tasksService=tasksService;


  }
  //for instantiating the service class
 // private tasksService = new TasksService(); 
  // tasks = [
  //   {
  //     id:'t1',
  //     userId:'u1',
  //     title: 'master angular',
  //     summary : 'Learn all the basic and advanced features of Angular and how to apply them',
  //     dueDate: '2026-03-29'
  //   },
  //   {
  //   id: 't2',
  //   userId: 'u3',
  //   title: 'Build first prototype',
  //   summary: 'Build a first prototype of the online shop website',
  //   dueDate: '2026-05-31',
  // },
  // {
  //   id: 't3',
  //   userId: 'u3',
  //   title: 'Prepare issue template',
  //   summary:
  //     'Prepare and describe an issue template which will help with project management',
  //   dueDate: '2026-06-15',
  // },
  // ];


  // get selectedUserTasks(){
  //   return this.tasks.filter((t)=>t.userId===this.userId);
  // } instead of writing here,create service class and update here

  // onCompleteTask(id: string){
  //   this.tasks=this.tasks.filter((t)=> t.id!==id);
  // } removeTask in service class

  get selectedUserTasks(){
    return this.tasksService.getUserTask(this.userId);
  }

  onCompleteTask(id: string){

  }
  onStartAddTask(){
    this.isAddingTask=true;
   }
  // onCancelAddTask(){
  //   this.isAddingTask=false;
  // }

    onCloseAddTask(){ //using service class
    this.isAddingTask=false;
  }

  // onAddTask(taskData: NewTaskData){
  //   this.tasks.push({ //instead of this line,we can use this.tasks.unshift
  //     id: new Date().getTime().toString(),
  //     userId: this.userId,
  //     title: taskData.title,
  //     summary: taskData.summary,
  //     dueDate: taskData.date
  //    })
  //    this.isAddingTask=false;

  // }

}
