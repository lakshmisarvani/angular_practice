import { Component,EventEmitter,Input,Output} from '@angular/core';
import { DatePipe } from '@angular/common';
import type { TaskInterface } from './task.model';
import { Card } from '../../shared/card/card';
// interface TaskInterface{
//   id:string;
//   userId:string;
//   title:string;
//   summary:string;
//   dueDate: string;
// }
@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: TaskInterface;
  @Output() complete=new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.task.id);
  }


}
