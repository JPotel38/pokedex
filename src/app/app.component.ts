import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  langSelect: Array<string> = ['en', 'fr'];
  toggle = document.querySelector('#themeToggle');


  constructor(private translate: TranslateService,
  public readonly router: Router) {
    translate.setDefaultLang('en');
  }

  selectedLang($event): void {
    this.translate.use($event.target.value);
  }

  goBackToPokedex(): void {
    this.router.navigate([`/`]);
  }

  checkToggle(e): void {
    const isChecked = e.detail.checked;
      document.body.classList.toggle('dark', isChecked);
    console.log(document.body.classList);
    }
}
