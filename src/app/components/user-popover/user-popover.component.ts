import {Component, OnInit} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";
import {User} from "../../shared/interfaces/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent implements OnInit {
  public currentUser: User;

  constructor(public utilsService: UtilsService,
              public userService: UserService
  ) {
  }

  ngOnInit() {
  }

}
