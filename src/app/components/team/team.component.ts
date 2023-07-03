import {Component, ViewChild} from '@angular/core';
import {TrainerService} from "../../shared/services/trainer.service";
import {FormControl} from "@angular/forms";
import {IonModal} from "@ionic/angular";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  public isModalOpen = false;
  public pokemonName = new FormControl('');
  public index: number;
  @ViewChild(IonModal) modal: IonModal;


  constructor(public trainerService: TrainerService
  ) {
  }

  setOpen(isOpen: boolean, index: number): void {
    this.isModalOpen = isOpen;
    this.index = index;
  }

  deletePokemon(index: number): void {
    this.trainerService.user.value.pokemonTeam.splice(index, 1)
  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

  confirm(): void {
    this.trainerService.updatePokemonName(this.index, this.pokemonName.value);
    this.modal.dismiss(this.pokemonName, 'confirm');
    this.isModalOpen = false;
  }
}
