import {Component, OnInit} from '@angular/core';
import {TrainerService} from "../../shared/services/trainer.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  displayCancelButton: boolean = false;

  constructor(public trainerService: TrainerService
  ) {
  }

  ngOnInit() {
  }

  deletePokemon() {
    this.displayCancelButton = false;
  }

  mouseEnter() {
    this.displayCancelButton = !this.displayCancelButton
  }
}
