import {Injectable} from '@angular/core';
import {Pokemon} from '../interfaces/pokemon';
import {Color, Gender, Types} from '../enums/pokemon-types.enum';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllPokemonsService {

  pokemonArray: Array<Pokemon>;

  constructor(readonly http: HttpClient) {
    this.pokemonArray = [
      {
        id: 1,
        name: 'Pikachu',
        type: Types.electrik,
        gender: Gender.male,
        height: 1,
        weight: 10,
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg'
      },
      {
        id: 2,
        name: 'Charmander',
        type: Types.fire,
        gender: Gender.female,
        height: 1,
        weight: 10,
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg'
      },
      {
        id: 3,
        name: 'Bulbasaur',
        type: Types.grass,
        gender: Gender.male,
        height: 1,
        weight: 10,
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg'
      },
      {
        id: 4,
        name: 'Squirtle',
        type: Types.water,
        gender: Gender.male,
        height: 1,
        weight: 10,
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg'
      },
      {
        id: 5,
        name: 'Caterpie',
        type: Types.insect,
        gender: Gender.male,
        height: 1,
        weight: 10,
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg'
      },
      {
        id: 6,
        name: 'Pidgeotto',
        type: Types.fly,
        gender: Gender.female,
        height: 1,
        weight: 10,
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg'
      },
    ];

  }

  getDetailsPokemon(id: number) {
    return this.pokemonArray[id - 1];
  }

  getAllPokemons(): Array<Pokemon> {
    return this.pokemonArray;
  }
}
