import { Component, EventEmitter, Output, signal,inject,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})

export class NewTask {
  @Input({required: true}) userId!:string;
  @Output() close=new EventEmitter<void>();
  //@Output() cancel=new EventEmitter<void>();
 // @Output() add=new EventEmitter<NewTaskData>();
  // enteredTitle = signal('');
  // enteredSummary=signal('');
  // enteredDate=signal(''); //when used signals in this context,need to update in certain html as  [(ngModel)]="enteredTitle()" for each of the tag wherever needed

   enteredTitle = ('');
  enteredSummary=('');
  enteredDate=('');

  //injects=> it injects a dependency and it provides a value as a property
  private tasksService=inject(TasksService)

  onCancel(){
    //this.cancel.emit();
    this.close.emit();
  }

  // onSubmit(){
  //   this.add.emit({
  //     title:this.enteredTitle,
  //     //date:String,
  //     summary:this.enteredSummary,
  //     date:this.enteredDate,
  //   })


  // }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },
  this.userId);
  this.close.emit(); //more service usage and alternative dependency injection mechanism
  }
}
