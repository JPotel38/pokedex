import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from "../../shared/interfaces/user";
import {Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {TrainerService} from "../../shared/services/trainer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isChecked: boolean = false;
  public langSelect: Array<string> = ['en', 'fr'];
  public toggle = document.querySelector('#themeToggle');
  public user: User;
  public currentUrl: string;
  public isOpen: boolean = false;
  private trainerServiceSubscription: Subscription;
  private routingEventsSubscription: Subscription;
  @ViewChild('popover') popover;

  constructor(private translate: TranslateService,
              public readonly router: Router,
              public trainerService: TrainerService
  ) {
  }

  ngOnInit(): void {
    this.routingEventsSubscription = this.router.events.subscribe(() => this.currentUrl = this.router.url);
    // this.trainerServiceSubscription = this.trainerService.usersList.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    if (this.trainerServiceSubscription) {
      this.trainerServiceSubscription.unsubscribe();
    }

    if (this.routingEventsSubscription) {
      this.routingEventsSubscription.unsubscribe();
    }
  }

  selectedLang(event: Event): void {
    const customEvent = event as CustomEvent;
    this.translate.use(customEvent.detail.value);
  }

  goBackToPokedex(): void {
    this.router.navigate([`/`]);
  }

  switchTheme(): void {
    this.isChecked = this.isChecked == false;
    document.body.classList.toggle('dark', this.isChecked);
  }

  logOut(): void {
    // this.trainerService.usersList.next({...this.user, connected: false});
  }

  handleNavigation(route: string): void {
    this.router.navigate([route]);
    if (this.isOpen) this.isOpen = false;
  }

  presentPopover(e: Event): void {
    this.popover.event = e;
    this.isOpen = true;
  }
}

