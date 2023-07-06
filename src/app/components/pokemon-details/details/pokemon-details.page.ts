import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StoneEnum} from 'src/app/shared/enums/stone.enum';
import {Pokemon} from '../../../shared/interfaces/pokemon';
import {AllPokemonService} from '../../../shared/services/all-pokemon.service';
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../../shared/interfaces/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit, OnDestroy, OnChanges {
  public pokemonId: number;
  public pokemon: Pokemon;
  public level: number;
  public team: Array<Pokemon> = [];
  public user: User;
  public currentUser: User;
  @Input()
  public navigate: number;
  @Output()
  evolve: EventEmitter<void> = new EventEmitter<void>();
  private userServiceSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private allPokemonService: AllPokemonService,
    private router: Router,
    public userService: UserService,
  ) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
    this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId);
  }

  ngOnInit(): void {
    this.userServiceSubscription = this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {
    if (this.userServiceSubscription) this.userServiceSubscription.unsubscribe();
  }

  ngOnChanges(): void {
    this.router.navigate([`pokemon-details/${this.navigate}`]);
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
    const evolution = (Number(this.pokemonId) + this.pokemon.stone.indexOf(stone) + 1).toString();
    this.router.navigate([`pokemon-details/${evolution}`]);
  }

  redirectToSignin(): void {
    this.router.navigate(['/signin'])
  }

  nextPokemon() {
    this.evolve.emit()
  }
}
