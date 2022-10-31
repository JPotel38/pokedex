import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { ColorEnum } from "../../shared/enums/color.enum";
let AllPokemonsComponent = class AllPokemonsComponent {
    constructor(allPokemonService, activatedRoute, translateService, utilsService, trainerService, router) {
        this.allPokemonService = allPokemonService;
        this.activatedRoute = activatedRoute;
        this.translateService = translateService;
        this.utilsService = utilsService;
        this.trainerService = trainerService;
        this.router = router;
        this.pokemon = new FormControl('');
        this.isFilteredByName = false;
        this.isFilteredByType = false;
        this.colorEnum = ColorEnum;
        this.typeSelectedArray = [];
        this.team = [];
    }
    ngOnInit() {
        this.activatedRouteSubscription = this.activatedRoute.data.subscribe(({ allPokemon }) => {
            this.pokemonArray = allPokemon;
        });
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
    goToDetails(id) {
        this.router.navigate([`pokemon-details/${id}`]);
    }
    filterByName() {
        if (!this.pokemon.value) {
            this.pokemonArray = this.allPokemonService.getAllPokemons();
        }
        else {
            this.isFilteredByName = true;
            this.translateServiceSubscription = this.translateService.getTranslation(this.translateService.currentLang)
                .subscribe(res => {
                for (const [key, value] of Object.entries(res.NAMES)) {
                    if (this.pokemon.value.charAt(0).toUpperCase() + this.pokemon.value.slice(1) === value) {
                        this.pokemonArray = this.pokemonArray.filter(result => result.name === key);
                    }
                }
            });
        }
    }
    filterByType(selectedType) {
        this.isFilteredByType = true;
        if (!this.typeSelectedArray.find(typeSelected => typeSelected === selectedType[0])) {
            this.typeSelectedArray.push(selectedType[0]);
        }
        this.pokemonArray = this.allPokemonService.getAllPokemons();
        if (this.typeSelectedArray.length === 1) {
            this.pokemonArray = this.pokemonArray.filter(pokemon => pokemon.types.find(type => type === this.typeSelectedArray[0]));
        }
        else if (this.typeSelectedArray.length === 2) {
            this.pokemonArray = this.pokemonArray.filter(pokemon => this.utilsService.arrayEquals(pokemon.types, this.typeSelectedArray));
        }
    }
    clearName() {
        this.pokemon.reset();
        this.isFilteredByName = false;
        if (this.isFilteredByType) {
            this.filterByType(this.typeSelectedArray);
        }
        else {
            this.pokemonArray = this.allPokemonService.getAllPokemons();
        }
    }
    clearType(index) {
        if (this.isFilteredByName) {
            this.filterByName();
        }
        else {
            this.typeSelectedArray.splice(index, 1);
            if (!this.typeSelectedArray.length) {
                this.isFilteredByType = false;
                this.pokemonArray = this.allPokemonService.getAllPokemons();
            }
            else {
                this.filterByType(this.typeSelectedArray);
            }
        }
    }
};
AllPokemonsComponent = __decorate([
    Component({
        selector: 'app-all-pokemons',
        templateUrl: './all-pokemons.component.html',
        styleUrls: ['./all-pokemons.component.scss'],
    })
], AllPokemonsComponent);
export { AllPokemonsComponent };
//# sourceMappingURL=all-pokemons.component.js.map