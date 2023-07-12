import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPage implements OnDestroy {
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
      pokemonTeam: []
    };

    const registeredUser = this.userService.getUser();
    if (registeredUser.userName === this.user.userName && registeredUser.password === this.user.password) {
      this.userService.currentUser$.next(this.user);
      this.router.navigate([`/`]);
    } else {
      alert('Unknown user');
    }
  }

  success(userArray: Array<User>): User {
    return userArray.find(user => JSON.stringify(user) === JSON.stringify(this.user));
  }
}
