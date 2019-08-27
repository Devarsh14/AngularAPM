import { UserInfo } from './user-info';
import { IListOfUsers } from './list-of-users';


export class ListOfUsersImplementation implements IListOfUsers {
  ListOfUsers(): UserInfo[] {

    let listofuser: Array<UserInfo>;

    listofuser = [{familyName: 'Devarsh', id: 1, name: 'Shukla'}];
    return listofuser;
  }
}
