import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {TrainerService} from './shared/services/trainer.service';
import {User} from './shared/interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  isChecked: boolean = false;
  langSelect: Array<string> = ['en', 'fr'];
  toggle = document.querySelector('#themeToggle');
  user: User;
  currentUrl: string;

  constructor(private translate: TranslateService,
              public readonly router: Router,
              public trainerService: TrainerService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
    router.events.subscribe(() => this.currentUrl = router.url);
  }

  ngOnInit() {
    this.trainerService.user.subscribe(user => this.user = user);
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
    this.trainerService.user.next(null);
  }

  goSignin() {
    this.router.navigate([`signin`]);

  }
}
