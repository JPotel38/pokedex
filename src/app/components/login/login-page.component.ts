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

  constructor(private router: Router,
              private trainerService: TrainerService,
              fb: UntypedFormBuilder
  ) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      name: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnInit() {
  }

  validate() {
    this.user = {
      login: this.userForm.get('name').value,
      password: this.userForm.get('password').value
    };
    const userArrayFromStorage = JSON.parse(localStorage.getItem('userArray'));
    if (this.success(userArrayFromStorage)) {
      this.router.navigate([`/`]);
    } else {
      alert('Unknown user');
    }
  }

  success(userArray: Array<User>): User {
    return userArray.find(user => JSON.stringify(user) === JSON.stringify(this.user));
  }
}
