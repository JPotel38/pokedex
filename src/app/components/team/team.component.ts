import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TrainerService} from "../../shared/services/trainer.service";
import {Pokemon} from "../../shared/interfaces/pokemon";
import {FormControl} from "@angular/forms";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, AfterViewInit {
  isModalOpen = false;
  pokemonName = new FormControl('');
  index: number;
  @ViewChild(IonModal) modal: IonModal;


  constructor(public trainerService: TrainerService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  setOpen(isOpen: boolean, index: number) {
    this.isModalOpen = isOpen;
    this.index = index;
  }

  deletePokemon(index: number) {
    this.trainerService.user.value.pokemonTeam.splice(index, 1)
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

  confirm() {
    this.trainerService.updatePokemonName(this.index, this.pokemonName.value);
    this.modal.dismiss(this.pokemonName, 'confirm');
    this.isModalOpen = false;
  }
}
