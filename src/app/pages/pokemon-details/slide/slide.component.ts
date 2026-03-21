import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AllPokemonService} from "../../../shared/services/all-pokemon.service";
import {Pokemon} from "../../../shared/interfaces/pokemon";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  public pokemonId: number;
  public pokemonArray: Array<Pokemon>;
  public initPokemon: number;

  constructor(private route: ActivatedRoute, private allPokemonService: AllPokemonService) {
  }

  ngOnInit() {
    this.pokemonArray = this.allPokemonService.getAllPokemons();
    this.initPokemon = Number(this.route.snapshot.params.id) - 1;
  }
}
