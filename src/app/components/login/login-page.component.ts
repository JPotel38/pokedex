import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

  constructor(public readonly router: Router,
              public trainerService: TrainerService) {
    this.user = {
      login: '',
      password: ''
    };
    this.userForm = new FormGroup({
      name: new FormControl(''),
      password: new FormControl(''),
      pokemonTeam: new FormControl([])
    });
  }

  ngOnInit() {
  }

  validate() {
    this.user.login = this.userForm.get('name').value;
    this.user.password = this.userForm.get('password').value;
    this.trainerService.trainer.next(this.user);
    this.router.navigate([`/`]);
  }
}
