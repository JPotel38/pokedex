import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";
import {User} from "../../shared/interfaces/user";
import {UserService} from "../../shared/services/user.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss'],
})
export class UserPopoverComponent implements OnInit {
  public currentUser: User;
  private userServiceSubscription: Subscription;
  @Output() open: EventEmitter<boolean> = new EventEmitter();

  constructor(public utilsService: UtilsService,
              public userService: UserService,
              public readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
  }

  handleNavigation(route: string, isOpen: boolean) {
    this.router.navigate([route]);
    if (isOpen) this.open.emit(false);
  }

  logOut() {
    this.userService.logOut();
    this.open.emit(false);
  }
}
