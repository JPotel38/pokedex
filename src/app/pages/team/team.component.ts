import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../shared/services/user.service";
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";
import {User} from "../../shared/interfaces/user";
import {IonModal} from "@ionic/angular";

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
  private userServiceSubscription: Subscription;
  @ViewChild(IonModal) modal: IonModal;

  constructor(public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
  }

  setOpen(isOpen: boolean, index: number): void {
    this.isModalOpen = isOpen;
    this.index = index;
  }

  cancel(): void {
    this.modal.dismiss(null, 'cancel');
    this.isModalOpen = false;
  }

  confirm(): void {
    this.updatePokemonName(this.index, this.pokemonName.value);
    this.modal.dismiss(this.pokemonName, 'confirm');
    this.isModalOpen = false;
  }

  updatePokemonName(index: number, name: string): void {
    const storedUser: User = this.userService.getStoredUser();
    storedUser.pokemonTeam[index].chosenName = name;
    localStorage.setItem('user', JSON.stringify(storedUser));
    this.currentUser.pokemonTeam = storedUser.pokemonTeam;
  }

  deletePokemon(index: number): void {
    const storedUser: User = this.userService.getStoredUser();
    storedUser.pokemonTeam.splice(index, 1);
    localStorage.setItem('user', JSON.stringify(storedUser));
    this.currentUser.pokemonTeam = storedUser.pokemonTeam;
  }
}
