import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from "../../shared/interfaces/user";
import {Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {UtilsService} from "../../shared/services/utils.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isChecked: boolean = false;
  public langSelect: Array<string> = ['en', 'fr'];
  public toggle = document.querySelector('#themeToggle');
  public currentUser: User;
  public currentUrl: string;
  public isOpen: boolean = false;
  private userServiceSubscription: Subscription;
  private routingEventsSubscription: Subscription;
  @ViewChild('popover') popover;

  constructor(private translate: TranslateService,
              public readonly router: Router,
              public userService: UserService,
              public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.routingEventsSubscription = this.router.events.subscribe(() => this.currentUrl = this.router.url);
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
    if (this.routingEventsSubscription) this.routingEventsSubscription.unsubscribe();
  }

  selectedLang(event: Event): void {
    const customEvent = event as CustomEvent;
    this.translate.use(customEvent.detail.value);
  }

  switchTheme(): void {
    this.isChecked = this.isChecked == false;
    document.body.classList.toggle('dark', this.isChecked);
  }

  handleNavigation(route: string): void {
    this.router.navigate([route]);
    if (this.isOpen) this.isOpen = false;
  }

  presentPopover(e: Event): void {
    this.popover.event = e;
    this.isOpen = true;
  }

  dismiss($event: boolean) {
    this.isOpen = $event;
  }
}

