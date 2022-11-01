import { Component, OnInit } from '@angular/core';
import {TrainerService} from "../../shared/services/trainer.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor(public trainerService: TrainerService) { }

  ngOnInit() {}

}
