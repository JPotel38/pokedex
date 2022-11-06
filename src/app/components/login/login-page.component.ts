import {Component, OnDestroy} from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {TrainerService} from '../../shared/services/trainer.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPage implements OnDestroy {
  userForm: FormGroup;
  user: User;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  private storedUser: User;
  private trainerServiceSubscription: Subscription;

  constructor(private router: Router,
              private trainerService: TrainerService,
              fb: UntypedFormBuilder
  ) {
    this.loginCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnDestroy() {
    if (this.trainerServiceSubscription) {
      this.trainerServiceSubscription.unsubscribe();
    }
  }

  validate() {
    this.user = {
      login: this.userForm.get('loginCtrl').value,
      userName: this.user.login,
      password: this.userForm.get('passwordCtrl').value,
      connected: true
    };
    this.trainerServiceSubscription = this.trainerService.user.subscribe(storedUser => {
        this.storedUser = storedUser
      }
    )
    if (this.user.login === this.storedUser.login && this.user.password === this.storedUser.password) {
      this.trainerService.setUser({...this.user})
      this.router.navigate([`/`]);
    } else {
      alert('Unknown user');
    }

  }

  success(userArray: Array<User>): User {
    return userArray.find(user => JSON.stringify(user) === JSON.stringify(this.user));
  }
}
