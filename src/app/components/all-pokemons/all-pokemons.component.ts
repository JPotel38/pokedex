import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AllPokemonService} from '../../shared/services/all-pokemon.service';
import {Pokemon} from "../../shared/interfaces/pokemon";
import {FormControl} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.scss'],
})
export class AllPokemonsComponent implements OnDestroy {
  p: number = 1;
  pokemonArray: Array<Pokemon>
  pokemon = new FormControl('');
  private translateServiceSubscription: Subscription;

  constructor(
    public readonly allPokemonService: AllPokemonService,
    private translateService: TranslateService,
    public readonly router: Router
  ) {
    this.pokemonArray = this.allPokemonService.getAllPokemons();
  }

  ngOnDestroy() {
    if (this.translateServiceSubscription) {
      this.translateServiceSubscription.unsubscribe();
    }
  }

  goToDetails(id: number) {
    this.router.navigate([`pokemon-details/${id}`]);
  }

  search() {
    if (!this.pokemon.value) {
      this.pokemonArray = this.allPokemonService.getAllPokemons();
    } else {
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
}
