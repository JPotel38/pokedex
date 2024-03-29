import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Pokemon} from "../../shared/interfaces/pokemon";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";
import {ColorEnum} from "../../shared/enums/color.enum";
import {UtilsService} from "../../shared/services/utils.service";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/interfaces/user";
import {TypesEnum} from "../../shared/enums/types.enum";

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnDestroy {
  public pokemonArray: Array<Pokemon>
  public pokemon = new FormControl('');
  public isFilteredByName: boolean = false;
  public isFilteredByType: boolean = false;
  public isFilteredByLegendary: boolean = false;
  public allTypes = Object.values(TypesEnum);
  public typeSelectedArray: string[] = [];
  public team: Array<Pokemon> = [];
  public isChecked: boolean = false;
  private translateServiceSubscription: Subscription;
  private readonly activatedRouteSubscription: Subscription;
  private user: User;
  private userSubscription: Subscription;

  constructor(
    public readonly allPokemonService: AllPokemonService,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService,
    private utilsService: UtilsService,
    public userService: UserService,
    public readonly router: Router,
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart && event.url === '/') {
        this.typeSelectedArray = [];
      }
    });
    this.activatedRouteSubscription = this.activatedRoute.data.subscribe(({allPokemon}) => {
      this.pokemonArray = allPokemon;
    })
    this.userSubscription = this.userService.currentUser$.subscribe(cU => this.user = cU);
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
              this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.name === key)
            }
          }
        })
    }
  }

  filterByType(types: string[]): void {
    this.typeSelectedArray = types;
    this.isFilteredByType = true;
    this.pokemonArray = this.allPokemonService.getAllPokemons();
    if (this.typeSelectedArray.length === 1) {
      this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.types.find(type => type === this.typeSelectedArray[0]))
    } else if (this.typeSelectedArray.length === 2) {
      this.pokemonArray = this.pokemonArray.filter(pokemon => this.utilsService.arrayEquals(pokemon.types, this.typeSelectedArray))
    }
    if (this.isFilteredByLegendary) {
      this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.isLegendary)
    }
  }

  filterLegendary(event: boolean): void {
    this.isFilteredByLegendary = this.isChecked = event;
    if (this.isFilteredByLegendary) {
      this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.isLegendary)
    } else {
      if (this.isFilteredByType) {
        this.filterByType(this.typeSelectedArray);
      } else {
        this.pokemonArray = this.allPokemonService.getAllPokemons();
      }
    }
  }

  clearName(): void {
    this.pokemon.reset();
    this.isFilteredByName = false;
    if (this.isFilteredByType) this.filterByType(this.typeSelectedArray);
    this.pokemonArray = this.allPokemonService.getAllPokemons();
  }

  clearType(index: number): void {
    if (this.isFilteredByName) {
      this.filterByName();
    } else {
      this.typeSelectedArray.splice(index, 1);
      if (!this.typeSelectedArray.length) {
        this.isFilteredByType = false;
        this.pokemonArray = this.allPokemonService.getAllPokemons();
        if(this.isFilteredByLegendary) {
          this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.isLegendary)
        }
      } else {
        this.filterByType(this.typeSelectedArray)
      }
    }
  }

  goToCaptureMode(): void {
    this.router.navigate(['capture']);
  }

  clearLegendary(): void {
    this.isFilteredByLegendary = this.isChecked = false;
    if (this.isFilteredByType) {
      this.filterByType(this.typeSelectedArray);
    } else {
      this.pokemonArray = this.allPokemonService.getAllPokemons();
    }
  }
}
