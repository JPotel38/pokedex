import {Component, OnInit, ViewChild} from '@angular/core';
import {UtilsService} from "../../shared/services/utils.service";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/interfaces/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public isOpen: boolean = false;
  public currentUser: User;
  private userServiceSubscription: Subscription;
  @ViewChild('popover') popover;

  constructor(public utilsService: UtilsService,
              public readonly router: Router,
              public userService: UserService) {
  }

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
  }

  presentPopover(e: Event): void {
    this.popover.event = e;
    this.isOpen = true;
  }

  dismiss($event: boolean) {
    this.isOpen = $event;
  }

  handleNavigation(route: string): void {
    this.router.navigate([route]);
    if (this.isOpen) this.isOpen = false;
  }

}
