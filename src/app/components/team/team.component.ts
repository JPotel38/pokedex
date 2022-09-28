import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from 'src/app/shared/interfaces/pokemon';
import {TrainerService} from "../../shared/services/trainer.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input() team: Array<Pokemon>
  displayCancelButton: boolean = false;

  constructor(public trainerService: TrainerService
  ) {
  }

  ngOnInit() {
  }

  deletePokemon() {

  }

  mouseEnter(true1: boolean) {
    this.displayCancelButton = true1
  }

  mouseLeave(b: boolean) {
    this.displayCancelButton = b
  }
}
