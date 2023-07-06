import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {TrainerService} from '../../shared/services/trainer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  public userForm: FormGroup;
  public user: User;
  public userArray: Array<User> = [];
  public loginCtrl: FormControl;
  public passwordCtrl: FormControl;
  public passwordConfirmCtrl: FormControl;
  public passwordForm: FormGroup;

  constructor(public readonly router: Router,
              public trainerService: TrainerService,
              private fb: FormBuilder
  ) {
    this.loginCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.passwordConfirmCtrl = fb.control('', Validators.required);

    this.passwordForm = fb.group(
      {password: this.passwordCtrl, passwordConfirm: this.passwordConfirmCtrl},
      {validators: SigninComponent.passwordMatch}
    );

    this.userForm = fb.group({
      login: this.loginCtrl,
      passwordForm: this.passwordForm,
      pokemonTeam: fb.control([])
    });
  }

  static passwordMatch(group: FormGroup): { matchingError: true } | null {
    const password = group.get('password').value;
    const confirm = group.get('passwordConfirm').value;
    return password === confirm ? null : {matchingError: true};
  }

  validate(): void {
    this.user = {
      login: this.userForm.get('login').value,
      userName: this.userForm.get('login').value,
      password: this.userForm.get('passwordForm').value.password,
      connected: true,
      pokemonTeam: []
    };
    this.trainerService.setUser(this.user);
    this.router.navigate([`/`]);
  }
}


