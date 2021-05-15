import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/users';
import { Observable } from 'rxjs';
// import {} from '../../assets/actions/users-actions';
import { select, Store } from '@ngrx/store'; // to get data
import {UsersSelect} from '../../assets/actions/users-actions/user-actions';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  // template: `<div class="container">

  //   <h1>Hello</h1>
  // </div>`,
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {
  public UsersList: Users[] = [];
  public selectedUserFromStore:Users=null;

  public UsersStoreList: Observable<Users>;

  constructor(private usersService: UsersService, private store: Store<{ usersStore: any }>) {
    this.getUsers();

      // **************************** getting data using store ******************************************
    store.pipe(select('usersStore')).subscribe((data) => {
      console.log('data using STORE');
      console.log(data);
      this.UsersStoreList = data.users;
      this.selectedUserFromStore=data.selectedUser;

      console.log('data.selectedUser HERE***************');
      console.log(data.selectedUser);
    })
  }

  ngOnInit() {
  }
  // *************************** traditional way of getting data ******************************************
  getUsers() {
    this.usersService.getUsersService().subscribe((res) => {
      console.log('res');
      console.log(res)
      if (!res) {
        // handle error
        console.log('error occured in COMPONENT')
      }
      else {
        this.UsersList = res.body['data'];
        console.log('this.UsersList');
        console.log(this.UsersList);
      }
    })
  }

// ********************* trigger dispatch for store ****************************************
  selectUserFunc2(target) {
    console.log('selectUser2 called');
    console.log(target);

    this.store.dispatch(new UsersSelect(target));
  }



  // *********************** simple function, being called in child component, via the emmitter ***********************************
  selectUserFunc(target) {
    console.log('selectUser called');
    console.log(target);
  }
  

  // post request dummy
  postRequestFunc(obj) {
    console.log('obj');
    console.log(obj);
    this.usersService.saveUser(obj).subscribe((res) => {
      if (!res) {
        console.log('error')
      }
      else {
        // success
        console.log('res.body');
        console.log(res.body);
      }
    })
  }
}
