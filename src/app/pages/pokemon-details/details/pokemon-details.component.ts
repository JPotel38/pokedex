import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoneEnum} from 'src/app/shared/enums/stone.enum';
import {Pokemon} from '../../../shared/interfaces/pokemon';
import {AllPokemonService} from '../../../shared/services/all-pokemon.service';
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/interfaces/user";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent {
  public level: number;
  public team: Array<Pokemon> = [];
  public user: User;
  public currentUser: User;
  @Input()
  public pokemon: Pokemon;
  @Output()
  public evolve: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private allPokemonService: AllPokemonService,
    private router: Router,
    public userService: UserService,
  ) {
  }

  playAudio(): void {
    const audio = new Audio();
    audio.src = this.pokemon.audio;
    document.getElementById('img').classList.toggle('shake');
    audio.load();
    audio.play();
  }

  manageLevel(e): void {
    this.level = e.detail.value;
  }

  useStone(stone: StoneEnum): void {
    const evolution = (Number(this.pokemon.id) + this.pokemon.stone.indexOf(stone) + 1).toString();
    this.router.navigate([`pokemon-details/${evolution}`]);
  }

  redirectToSignin(): void {
    this.router.navigate(['/signin']);
  }

  nextPokemon(): void {
    this.evolve.emit();
  }
}
