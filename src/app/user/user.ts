import { Component,input,Input , Output,computed, EventEmitter, output} from '@angular/core';
//import { DUMMY_USERS } from '../dummy-users';
// type u = {
//   id: string;
//   avatar: string;
//   name: string;
// }
interface UserInterface{
  id:string;
  avatar:string;
  name:string;
}
//const randomIndex=Math.floor(Math.random()* DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone:true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  //properties that are defined in the class will be available in the template of that component
  //selectedUser = signal(DUMMY_USERS[randomIndex]); //import computed,signal
  // imagePath=computed(()=>
  //   'assets/users/' + this.selectedUser().avatar
  // ) //compute value using signals

  // get imagePath(){ //getter (compute any value)
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // // //add property that is settable from outside
  // @Input({required: true}) id!:string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  //instead of accepting all of the above fields within the object,we can directly input user object
  @Input({required: true}) user!: UserInterface;//! indicates that user should definitely has some input other than undefined
  //   id : string;
  //   avatar: string;
  //   name : string;
  // };

  //event emitter is an object
  // @Output() select = new EventEmitter();
  // select=output<string>(); //output gives us custom event that we can emit
  @Output() select=new EventEmitter<string>(); //add generic type definition here itself bcoz it checks for type safety of the datatype which will gonna use in onSelect()


    // avatar=input<string>();
      // avatar=input.required<string>();
      // name=input.required<string>();
  get imagePath(){
  //  return 'assets/users/' + this.avatar;
  return 'assets/users/' + this.user.avatar;
  }
  // imagePath=computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })

  onSelect(){
  //   //console.log('clicked')
  //   const randomIndex=Math.floor(Math.random()* DUMMY_USERS.length)
  //   //selectedUser is a signal object
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  //   //this.selectedUser=DUMMY_USERS[randomIndex];
  // }
 //this.select.emit(this.id); //method provided by event emitter object,parameter id should be in string format that was defined in the output decorator
    this.select.emit(this.user.id);
  }
}
