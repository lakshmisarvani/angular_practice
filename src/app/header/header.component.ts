import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true,
  //for angualar>19  standalone: true is default command itself
    templateUrl: './header.component.html',
    styleUrl:'./header.component.css'


})
export class HeaderComponent{}