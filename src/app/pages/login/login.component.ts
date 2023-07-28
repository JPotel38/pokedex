import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  public userForm: FormGroup;
  public user: User;
  public loginCtrl: FormControl;
  public passwordCtrl: FormControl;
  private userServiceSubscription: Subscription;

  constructor(private router: Router,
              private userService: UserService,
              fb: FormBuilder
  ) {
    this.loginCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) {
      this.userServiceSubscription.unsubscribe();
    }
  }

  validate(): void {
    this.user = {
      login: this.userForm.get('login').value,
      userName: this.userForm.get('login').value,
      password: this.userForm.get('password').value,
    };

    const registeredUser = this.userService.getStoredUser();
    if (registeredUser.userName === this.user.userName && registeredUser.password === this.user.password) {
      this.userService.currentUser$.next(registeredUser);
      this.router.navigate([`/`]);
    } else {
      alert('Unknown user');
    }
  }
}
