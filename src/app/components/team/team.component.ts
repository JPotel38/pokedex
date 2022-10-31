import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TrainerService} from "../../shared/services/trainer.service";
import {Pokemon} from "../../shared/interfaces/pokemon";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, AfterViewInit {
  myTeam: Array<Pokemon>;
  constructor(public trainerService: TrainerService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.myTeam = this.trainerService.getPokemonTeam()
  }
}
