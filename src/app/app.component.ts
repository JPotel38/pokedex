import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {TrainerService} from './shared/services/trainer.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  langSelect: Array<string> = ['en', 'fr'];
  toggle = document.querySelector('#themeToggle');
  trainerForm: FormGroup;
  trainerName: string;

  constructor(private translate: TranslateService,
              public readonly router: Router,
              public trainerService: TrainerService
  ) {
    translate.setDefaultLang('en');
    this.trainerForm = new FormGroup({
      trainerName: new FormControl(null),

    });
  }

  ngOnInit() {
    this.trainerService.trainerName.subscribe(name => this.trainerName = name);
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
  }

  validateName() {
    this.trainerService.trainerName.next(this.trainerForm.get('trainerName').value);
  }

  changeName() {
    this.trainerForm.get('trainerName').setValue(null);
    this.trainerService.trainerName.next(this.trainerForm.get('trainerName').value);
  }
}
