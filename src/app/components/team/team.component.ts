import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {FormControl} from "@angular/forms";
import {IonModal} from "@ionic/angular";
import {Subscription} from "rxjs";
import {User} from "../../shared/interfaces/user";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit, OnDestroy {
  public isModalOpen = false;
  public pokemonName = new FormControl('');
  public index: number;
  public currentUser: User;
  @ViewChild(IonModal) modal: IonModal;
  private userServiceSubscription: Subscription;

  constructor(public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => {this.currentUser = user;});
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
  }

  setOpen(isOpen: boolean, index: number): void {
    this.isModalOpen = isOpen;
    this.index = index;
  }

  deletePokemon(index: number): void {
    // this.trainerService.usersList.value.pokemonTeam.splice(index, 1)
  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

  confirm(): void {
    this.userService.updatePokemonName(this.index, this.pokemonName.value);
    this.modal.dismiss(this.pokemonName, 'confirm');
    this.isModalOpen = false;
  }
}
