import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Pokemon} from "../../shared/interfaces/pokemon";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {ColorEnum} from "../../shared/enums/color.enum";
import {UtilsService} from "../../shared/services/utils.service";
import {TrainerService} from "../../shared/services/trainer.service";
import {User} from "../../shared/interfaces/user";
import {TypesEnum} from "../../shared/enums/types.enum";

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnInit, OnDestroy {
  public pokemonArray: Array<Pokemon>
  public pokemon = new FormControl('');
  public isFilteredByName: boolean = false;
  public isFilteredByType: boolean = false;
  public isFilteredByLegendary: boolean = false;
  public colorEnum = ColorEnum;
  public allTypes = Object.values(TypesEnum);
  public typeSelectedArray: string[] = [];
  public team: Array<Pokemon> = [];
  private translateServiceSubscription: Subscription;
  private activatedRouteSubscription: Subscription;
  private user: User;

  constructor(
    public readonly allPokemonService: AllPokemonService,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private utilsService: UtilsService,
    public trainerService: TrainerService,
    public readonly router: Router,
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart && event.url === '/') {
        this.typeSelectedArray = []
      }
    })
  }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(({allPokemon}) => {
      this.pokemonArray = allPokemon;
    })
    this.user = this.trainerService.user.value;
  }

  ngOnDestroy(): void {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
  }

  color(type: string): string {
    return ColorEnum[type + 'Color']
  }

  goToDetails(id: number): void {
    this.router.navigate([`pokemon-details/${id}`]);
  }

  filterByName(): void {
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

  filterByType(selectedType: Array<string>): void {
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

  filterLegendary() {
    this.isFilteredByLegendary = true;
    this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.isLegendary);
  }

  clearFilter(filter: string): void {
    this.pokemon.reset();
    this[filter] = false;
    if (this.isFilteredByType) {
      this.filterByType(this.typeSelectedArray);
    } else {
      this.pokemonArray = this.allPokemonService.getAllPokemons();
    }
  }

  clearType(index: number): void {
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
}
