import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent,User,Tasks], //NgFor,NgIf
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-course');
  users=DUMMY_USERS;
  selectedUserId:string | undefined;

  get selectedUser(){
    return this.users.find(user=>user.id===this.selectedUserId)!;
  }

  onSelect(id: string){
 // console.log("Selected user with id" +id);
 this.selectedUserId=id;
}
}
