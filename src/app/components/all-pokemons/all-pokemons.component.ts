import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Pokemon} from "../../shared/interfaces/pokemon";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {ColorEnum} from "../../shared/enums/color.enum";
import {UtilsService} from "../../shared/services/utils.service";
import {TrainerService} from "../../shared/services/trainer.service";
import {User} from "../../shared/interfaces/user";

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnInit, OnDestroy {
  pokemonArray: Array<Pokemon>
  pokemon = new FormControl('');
  isFilteredByName: boolean = false;
  isFilteredByType: boolean = false;
  colorEnum = ColorEnum;
  typeSelectedArray: string[] = [];
  private translateServiceSubscription: Subscription;
  private activatedRouteSubscription: Subscription;
  private timer: number;
  private preventSimpleClick: Boolean;
  team: Array<Pokemon> = [];
  private user: User;

  constructor(
    public readonly allPokemonService: AllPokemonService,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private utilsService: UtilsService,
    public trainerService: TrainerService,
    public readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(({allPokemon}) => {
      this.pokemonArray = allPokemon;
    })
    this.user = this.trainerService.user.value;
  }

  ngOnDestroy() {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  goToDetails(id: number) {
    this.timer = 0;
    this.preventSimpleClick = false;
    let delay = 200;
    this.timer = setTimeout(() => {
      if(!this.preventSimpleClick){
    this.router.navigate([`pokemon-details/${id}`]);
      }
    }, delay);
  }

  filterByName() {
    if (!this.pokemon.value) {
      this.pokemonArray = this.allPokemonService.getAllPokemons();
    } else {
      this.isFilteredByName = true;
      this.translateServiceSubscription = this.translateService.getTranslation(this.translateService.currentLang)
        .subscribe(res => {
          for (const [key, value] of Object.entries(res.NAMES)) {
            if (this.pokemon.value.charAt(0).toUpperCase() + this.pokemon.value.slice(1) === value) {
              this.pokemonArray = this.pokemonArray.filter(result => result.name === key)
            }
          }
        })
    }
  }

  filterByType(selectedType: Array<string>) {
    this.isFilteredByType = true;
    if (!this.typeSelectedArray.find(typeSelected => typeSelected === selectedType[0])) {
      this.typeSelectedArray.push(selectedType[0])
    }
    this.pokemonArray = this.allPokemonService.getAllPokemons();
    if (this.typeSelectedArray.length === 1) {
      this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.types.find(type => type === this.typeSelectedArray[0]))
    } else if (this.typeSelectedArray.length === 2) {
      this.pokemonArray = this.pokemonArray.filter(pokemon => this.utilsService.arrayEquals(pokemon.types, this.typeSelectedArray))
    }
  }

  clearName() {
    this.pokemon.reset();
    this.isFilteredByName = false;
    if (this.isFilteredByType) {
      this.filterByType(this.typeSelectedArray);
    } else {
      this.pokemonArray = this.allPokemonService.getAllPokemons();
    }
  }

  clearType(index: number) {
    if (this.isFilteredByName) {
      this.filterByName();
    } else {
      this.typeSelectedArray.splice(index, 1);
      if (!this.typeSelectedArray.length) {
        this.isFilteredByType = false;
        this.pokemonArray = this.allPokemonService.getAllPokemons();
      } else {
        this.filterByType(this.typeSelectedArray)
      }
    }
  }

  addPokemonToTeam(pokemon: Pokemon) {
    this.preventSimpleClick = true;
    this.team.push(pokemon);
    this.trainerService.setPokemonTeam(this.team);
    clearTimeout(this.timer);
  }

  redirectToSignin() {
    this.router.navigate(['/signin'])
  }
}
