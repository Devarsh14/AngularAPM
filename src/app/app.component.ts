import { Component } from '@angular/core';
import { ListUserService } from './list-user.service';
import { UserInfo } from './user-name/user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APM';
  pageTitle: string = 'Acme proudct Management';
  users: Array<UserInfo>;
  constructor(private listUserService: ListUserService){
    this.users=  this.listUserService.ListOfUsers();
  }

}
