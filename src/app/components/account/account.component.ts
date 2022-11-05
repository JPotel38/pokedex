import { Component, OnInit } from '@angular/core';
import {TrainerService} from "../../shared/services/trainer.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userForm: FormGroup;
  userNameCtrl: FormControl;

  constructor(public trainerService: TrainerService,
              public readonly router: Router,
              private fb: FormBuilder
) {
  this.userNameCtrl = fb.control('', Validators.required);
  this.userForm = fb.group({
    userName: this.userNameCtrl,
  });
}

  ngOnInit() {}

  validate() {
    this.trainerService.updateUserName(this.userForm.get('userName').value);
    this.router.navigate([`/`]);
  }
}
