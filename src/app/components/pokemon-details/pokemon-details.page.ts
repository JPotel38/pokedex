import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../../shared/interfaces/pokemon';
import {AllPokemonsService} from '../../shared/services/all-pokemons.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  pokemonId: number;
  pokemon: Pokemon;
  level: number;
  alert: any;

  constructor(
    public readonly activatedRoute: ActivatedRoute,
    public readonly allPokemonsService: AllPokemonsService,
    public alertController: AlertController,
    public readonly router: Router
  ) {
    this.pokemonId = this.activatedRoute.snapshot.params.id;
  }


  ngOnInit() {
    this.pokemon = this.allPokemonsService.getDetailsPokemon(this.pokemonId);
    this.playAudio();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: this.pokemon.name + ' is evolving!',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  playAudio() {
    const audio = new Audio();
    audio.src = this.pokemon.audio;
    audio.load();
    audio.play();
  }

  goBackToPokedex() {
    this.router.navigate([`/`]);
  }

  manageLevel(e) {
    this.level = e.detail.value;
  }

  previousPokemon() {
    this.pokemonId--;
    this.router.navigate([`pokemon-details/${this.pokemonId}`]);
  }

  nextPokemon() {
    this.pokemonId++;
    this.router.navigate([`pokemon-details/${this.pokemonId}`]);
  }
}
