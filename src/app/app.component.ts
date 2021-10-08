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

  constructor(private translate: TranslateService,
  public readonly router: Router) {
    translate.setDefaultLang('en');
  }

  selectedLang($event) {
    this.translate.use($event.target.value);
  }

  goBackToPokedex() {
    this.router.navigate([`/`]);
  }
}
