import {Injectable} from '@angular/core';
import {Pokemon} from '../interfaces/pokemon';
import {Types} from '../enums/types.enum';
import {HttpClient} from '@angular/common/http';
import {Color} from '../enums/color.enum';

@Injectable({
  providedIn: 'root'
})
export class AllPokemonsService {

  pokemonArray: Array<Pokemon>;

  constructor(readonly http: HttpClient) {
    this.pokemonArray = [
      {
        id: 1,
        name: 'Bulbasaur',
        types: [Types.grass],
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
        attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
      },
      {
        id: 2,
        name: 'Ivysaur',
        types: [Types.grass],
        height: '0.4m',
        weight: '6kg',
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. ',
        attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
      },
      {
        id: 3,
        name: 'Venusaur',
        types: [Types.grass],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 4,
        name: 'Charmander',
        types: [Types.fire],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 5,
        name: 'Charmeleon',
        types: [Types.fire],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 6,
        name: 'Charizard',
        types: [Types.fire],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 7,
        name: 'Squirtle',
        evolutionLevel: 16,
        types: [Types.water],
        height: '0.5 m',
        weight: '9.0 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg',
        description:'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
        attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
      },
      {
        id: 8,
        name: 'Wartortle',
        types: [Types.water],
        height: '1.0 m',
        weight: '22.5 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png',
        audio:'https://www.pokepedia.fr/images/6/6f/Cri_4_d_008.ogg',
        description:'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
        attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
      },
      {
        id: 9,
        name: 'Blastoise',
        types: [Types.water],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 10,
        name: 'Caterpie',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 11,
        name: 'Metapod',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 12,
        name: 'Butterfree',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 13,
        name: 'Weedle',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 14,
        name: 'Kakuna',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 15,
        name: 'Beedrill',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 16,
        name: 'Pidgey',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 17,
        name: 'Pidgeotto',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 18,
        name: 'Pidgeot',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 19,
        name: 'Rattata',
        types: [Types.normal],
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.normalColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
        attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
      },
      {
        id: 20,
        name: 'Raticate',
        types: [Types.normal],
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.normalColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
        attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
      },
      {
        id: 21,
        name: 'Spearow',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 22,
        name: 'Fearow',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 23,
        name: 'Ekans',
        types: [Types.poison],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.poisonColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 24,
        name: 'Arbok',
        types: [Types.poison],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.poisonColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 25,
        name: 'Pikachu',
        types: [Types.electrik],
        height: '0.4m',
        weight: '6kg',
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. ',
        attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
      },
      {
        id: 26,
        name: 'Raichu',
        types: [Types.electrik],
        height: '0.4m',
        weight: '6kg',
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. ',
        attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
      },
      {
        id: 27,
        name: 'Sandshrew',
        evolutionLevel: 16,
        types: [Types.ground],
        height: '0.5 m',
        weight: '9.0 kg ',
        color: Color.groundColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg',
        description:'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
        attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
      },
      {
        id: 28,
        name: 'Sandslash',
        types: [Types.ground],
        height: '1.0 m',
        weight: '22.5 kg ',
        color: Color.groundColor,
        img: 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png',
        audio:'https://www.pokepedia.fr/images/6/6f/Cri_4_d_008.ogg',
        description:'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
        attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
      },
      {
        id: 29,
        name: 'Nidoran♀',
        types: [Types.poison],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.poisonColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 30,
        name: 'Nidorina',
        types: [Types.poison],
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.poisonColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
        attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
      },
      {
        id: 31,
        name: 'Nidoqueen',
        types: [Types.poison, Types.ground],
        height: '0.4m',
        weight: '6kg',
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. ',
        attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
      },
      {
        id: 32,
        name: 'Nidoran♂',
        types: [Types.poison],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.poisonColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 4,
        name: 'Squirtle',
        evolutionLevel: 16,
        types: [Types.water],
        height: '0.5 m',
        weight: '9.0 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg',
        description:'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
        attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
      },
      {
        id: 5,
        name: 'Wartortle',
        types: [Types.water],
        height: '1.0 m',
        weight: '22.5 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png',
        audio:'https://www.pokepedia.fr/images/6/6f/Cri_4_d_008.ogg',
        description:'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
        attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
      },
      {
        id: 6,
        name: 'Caterpie',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 7,
        name: 'Pidgeotto',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 1,
        name: 'Bulbasaur',
        types: [Types.grass],
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
        attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
      },
      {
        id: 25,
        name: 'Pikachu',
        types: [Types.electrik],
        height: '0.4m',
        weight: '6kg',
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. ',
        attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
      },
      {
        id: 2,
        name: 'Charmander',
        types: [Types.fire],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 4,
        name: 'Squirtle',
        evolutionLevel: 16,
        types: [Types.water],
        height: '0.5 m',
        weight: '9.0 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg',
        description:'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
        attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
      },
      {
        id: 5,
        name: 'Wartortle',
        types: [Types.water],
        height: '1.0 m',
        weight: '22.5 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png',
        audio:'https://www.pokepedia.fr/images/6/6f/Cri_4_d_008.ogg',
        description:'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
        attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
      },
      {
        id: 6,
        name: 'Caterpie',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 7,
        name: 'Pidgeotto',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
      },
      {
        id: 1,
        name: 'Bulbasaur',
        types: [Types.grass],
        height: '0.7 m',
        weight: '6.9 kg',
        color: Color.grassColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/375px-Bulbizarre-RFVF.png',
        audio:'https://www.pokepedia.fr/images/9/97/Cri_6_x_001.ogg',
        description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
        attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
      },
      {
        id: 25,
        name: 'Pikachu',
        types: [Types.electrik],
        height: '0.4m',
        weight: '6kg',
        color: Color.electrikColor,
        img: 'https://www.pokepedia.fr/images/thumb/e/e7/Pikachu-RFVF.png/375px-Pikachu-RFVF.png',
        audio:'https://www.pokepedia.fr/images/e/ec/Cri_4_d_025.ogg',
        description:'It keeps its tail raised to monitor its surroundings. ' +
          'If you yank its tail, it will try to bite you. ',
        attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
      },
      {
        id: 2,
        name: 'Charmander',
        types: [Types.fire],
        height: '0.6m',
        weight: '8.5kg',
        color: Color.fireColor,
        img: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/375px-Salam%C3%A8che-RFVF.png',
        audio:'https://www.pokepedia.fr/images/c/cf/Cri_4_d_004.ogg',
        description:'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
        attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
      },
      {
        id: 4,
        name: 'Squirtle',
        evolutionLevel: 16,
        types: [Types.water],
        height: '0.5 m',
        weight: '9.0 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/375px-Carapuce-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f4/Cri_4_d_007.ogg',
        description:'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
        attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
      },
      {
        id: 5,
        name: 'Wartortle',
        types: [Types.water],
        height: '1.0 m',
        weight: '22.5 kg ',
        color: Color.waterColor,
        img: 'https://www.pokepedia.fr/images/2/2a/Carabaffe-RFVF.png',
        audio:'https://www.pokepedia.fr/images/6/6f/Cri_4_d_008.ogg',
        description:'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
        attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
      },
      {
        id: 6,
        name: 'Caterpie',
        types: [Types.insect],
        height: '0.3 m',
        weight: '2.9 kg',
        color: Color.insectColor,
        img: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/375px-Chenipan-RFVF.png',
        audio:'https://www.pokepedia.fr/images/f/f9/Cri_4_d_017.ogg',
        description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
        attacks: ['Tackle', 'String Shot']
      },
      {
        id: 7,
        name: 'Pidgeotto',
        types: [Types.fly],
        height: '1.1 m',
        weight: '30.0 kg',
        color: Color.flyColor,
        img: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/375px-Roucool-RFVF.png',
        audio:'https://www.pokepedia.fr/images/4/4c/Cri_4_d_010.ogg',
        description: 'This Pokémon is full of vitality. ' +
          'It constantly flies around its large territory in search of prey. ',
        attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
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
