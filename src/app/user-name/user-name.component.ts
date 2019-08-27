import { Component, OnInit } from '@angular/core';
import { ListUserService } from '../list-user.service';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  constructor(private listUserService: ListUserService) {
  }

  ngOnInit() {
  }

}
