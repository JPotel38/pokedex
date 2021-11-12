import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {TrainerService} from '../../shared/services/trainer.service';

@Component({
  selector: 'app-account',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  user: User;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  passwordConfirmCtrl: FormControl;

  constructor(public readonly router: Router,
              public trainerService: TrainerService,
              fb: FormBuilder
  ) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.passwordConfirmCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      name: this.usernameCtrl,
      password: this.passwordCtrl,
      passwordConfirm: this.passwordConfirmCtrl,
      pokemonTeam: fb.control([])
    });
  }

  ngOnInit() {
  }

  validate() {
    this.user = {
      login: this.userForm.get('name').value,
      password: this.userForm.get('password').value
    };
    this.trainerService.trainer.next(this.user);
    this.router.navigate([`/`]);
  }
}
