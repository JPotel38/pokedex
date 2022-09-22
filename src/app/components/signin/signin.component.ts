import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces/user';
import {Router} from '@angular/router';
import {TrainerService} from '../../shared/services/trainer.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {

  userForm: UntypedFormGroup;
  user: User;
  userArray: Array<User> = [];
  usernameCtrl: UntypedFormControl;
  passwordCtrl: UntypedFormControl;
  passwordConfirmCtrl: UntypedFormControl;
  passwordForm: UntypedFormGroup;

  constructor(public readonly router: Router,
              public trainerService: TrainerService,
              fb: UntypedFormBuilder
  ) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.passwordConfirmCtrl = fb.control('', Validators.required);

    this.passwordForm = fb.group(
      {password: this.passwordCtrl, passwordConfirm: this.passwordConfirmCtrl},
      {validators: SigninComponent.passwordMatch}
    );

    this.userForm = fb.group({
      name: this.usernameCtrl,
      passwordForm: this.passwordForm,
      pokemonTeam: fb.control([])
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
      password: this.userForm.get('passwordForm').value.password,
      connected: true
    };
    this.trainerService.setUser(this.user);
    this.router.navigate([`/`]);
  }
}


