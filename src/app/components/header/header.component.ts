import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {User} from "../../shared/interfaces/user";
import {Subscription} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {TrainerService} from "../../shared/services/trainer.service";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isChecked: boolean = false;
  langSelect: Array<string> = ['en', 'fr'];
  toggle = document.querySelector('#themeToggle');
  user: User;
  currentUrl: string;
  private trainerServiceSubscription: Subscription;
  private routingEventsSubscription: Subscription;
  @ViewChild('popover') popover;
  isOpen = false;

  constructor(private translate: TranslateService,
              public readonly router: Router,
              public trainerService: TrainerService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.routingEventsSubscription = this.router.events.subscribe(() => this.currentUrl = this.router.url);
    this.trainerServiceSubscription = this.trainerService.user.subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    if (this.trainerServiceSubscription) {
      this.trainerServiceSubscription.unsubscribe();
    }

    if (this.routingEventsSubscription) {
      this.routingEventsSubscription.unsubscribe();
    }
  }

  selectedLang($event): void {
    this.translate.use($event.target.value);
  }

  goBackToPokedex(): void {
    this.router.navigate([`/`]);
  }

  switchTheme(): void {
    this.isChecked = this.isChecked == false;
    document.body.classList.toggle('dark', this.isChecked);
  }

  goLogin() {
    this.router.navigate([`login`]);
  }

  goAccount() {
    this.router.navigate([`account`]);
  }

  logOut() {
    this.trainerService.user.next({...this.user, connected: false});
  }

  goSignin() {
    this.router.navigate([`signin`]);
  }

  goToTeam() {
    this.router.navigate([`team`]);
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}

