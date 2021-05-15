import { ChangeDetectionStrategy, Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';


@Component({
  selector: 'usersList',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  @Input() users;
  @Input() usersStoreList;
    @Output() selectUser = new EventEmitter();
    @Output() selectUser2 = new EventEmitter();
    @Output() postRequest = new EventEmitter();
  constructor() {


  }

  ngOnInit() {
  }


}
