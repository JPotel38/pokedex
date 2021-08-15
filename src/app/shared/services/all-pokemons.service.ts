import {Injectable} from '@angular/core';
import {Pokemon} from '../interfaces/pokemon';
import {Types} from '../enums/types.enum';
import {HttpClient} from '@angular/common/http';
import {Gender} from "../enums/gender.enum";
import {Color} from "../enums/color.enum";

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
        height: '0.4m',
        weight: '6kg',
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. '
      },
      {
        id: 2,
        name: 'Charmander',
        type: Types.fire,
        gender: Gender.female,
        height: '0.6m',
        weight: '8.5kg',
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. '
      },
      {
        id: 3,
        name: 'Bulbasaur',
        type: Types.grass,
        gender: Gender.male,
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. '
      },
      {
        id: 4,
        name: 'Squirtle',
        type: Types.water,
        gender: Gender.male,
        height: '0.5 m',
        weight: '9.0 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg',
        description:'Shoots water at prey while in the water. Withdraws into its shell when in danger. '
      },
      {
        id: 5,
        name: 'Caterpie',
        type: Types.insect,
        gender: Gender.male,
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. '
      },
      {
        id: 6,
        name: 'Pidgeotto',
        type: Types.fly,
        gender: Gender.female,
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. '
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
