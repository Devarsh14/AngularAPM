import { Injectable } from '@angular/core';
import { IListOfUsers } from './user-name/list-of-users';
import { UserInfo } from './user-name/user-info';

@Injectable({
  providedIn: 'root'
})
export class ListUserService implements IListOfUsers  {

  ListOfUsers(): UserInfo[] {

    let listofuser: Array<UserInfo>;

    listofuser = [{familyName: 'Devarsh', id: 1, name: 'Shukla'}];
    return listofuser;
  }
}
