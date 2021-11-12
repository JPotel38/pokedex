import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {TrainerService} from '../../shared/services/trainer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  userArray: Array<User> = [];
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(public readonly router: Router,
              public trainerService: TrainerService,
              fb: FormBuilder) {
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
    this.storeUser(this.user);
    this.trainerService.trainer.next(this.user);
    this.router.navigate([`/`]);
  }

  storeUser(user: User) {
    localStorage.getItem('userArray');
    this.userArray.push(user);
    localStorage.setItem('userArray', JSON.stringify(this.userArray));
  }

}
