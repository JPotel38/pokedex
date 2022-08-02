import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {TrainerService} from '../../shared/services/trainer.service';

@Component({
  selector: 'app-account',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPage implements OnInit {
  userForm: UntypedFormGroup;
  user: User;
  usernameCtrl: UntypedFormControl;
  passwordCtrl: UntypedFormControl;
  passwordConfirmCtrl: UntypedFormControl;
  passwordForm: UntypedFormGroup;

  constructor(private router: Router,
              private trainerService: TrainerService,
              fb: UntypedFormBuilder
  ) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.passwordConfirmCtrl = fb.control('', Validators.required);

    this.passwordForm = fb.group(
      {password: this.passwordCtrl, passwordConfirm: this.passwordConfirmCtrl},
      {validators: LoginPage.passwordMatch}
    );

    this.userForm = fb.group({
      name: this.usernameCtrl,
      passwordForm: this.passwordForm
    });
  }

  static passwordMatch(group: UntypedFormGroup): { matchingError: true } | null {
    const password = group.get('password').value;
    const confirm = group.get('passwordConfirm').value;
    return password === confirm ? null : {matchingError: true};
  }

  ngOnInit() {
  }

  validate() {
    this.user = {
      login: this.userForm.get('name').value,
      password: this.passwordForm.get('password').value
    };
    const userArrayFromStorage = JSON.parse(localStorage.getItem('userArray'));
    if (this.success(userArrayFromStorage)) {
      this.trainerService.trainer.next(this.user);
      this.router.navigate([`/`]);
    } else {
      alert('Unknown user');
    }
  }

  success(userArray: Array<User>): User {
    return userArray.find(user => JSON.stringify(user) === JSON.stringify(this.user));
  }
}
