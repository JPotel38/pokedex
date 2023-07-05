import {TypesEnum} from "../../shared/enums/types.enum";
import {ColorEnum} from "../../shared/enums/color.enum";

export const mockPokemon = {
  id: 6,
  name: 'Charizard',
  types: [TypesEnum.fire],
  height: '1.7 m',
  weight: '90.5 kg',
  taux: 125,
  color: [ColorEnum.fireColor],
  img: './assets/images/Charizard.png',
  icon: './assets/icons/Charizard.png',
  audio: './assets/audio/Charizard.ogg',
  attacks: ['Scratch', 'Growl', 'Ember', 'Leer'],
  isLegendary: false,
  generation: '1'
};

export const mockPokemonList = [
  {
    id: 1,
    name: 'Bulbasaur',
    evolutionLevel: 16,
    types: [TypesEnum.grass],
    height: '0.7 m',
    weight: '6.9 kg',
    taux: 125,
    color: [ColorEnum.grassColor],
    img: './assets/images/Bulbasaur.png',
    icon: './assets/icons/Bulbasaur.png',
    audio: './assets/audio/Bulbasaur.ogg',
    attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip'],
    isLegendary: false,
    generation: '1'
  },
  {
    id: 2,
    name: 'Ivysaur',
    evolutionLevel: 32,
    types: [TypesEnum.grass],
    height: '1.0 m',
    weight: '13 kg',
    taux: 32,
    color: [ColorEnum.grassColor],
    img: './assets/images/Ivysaur.png',
    icon: './assets/icons/Ivysaur.png',
    audio: './assets/audio/Ivysaur.ogg',
    attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam'],
    isLegendary: false,
    generation: '1'
  },
  {
    id: 3,
    name: 'Venusaur',
    types: [TypesEnum.grass],
    height: '2.0 m',
    weight: '100.0 kg',
    taux: 14,
    color: [ColorEnum.grassColor],
    img: './assets/images/Venusaur.png',
    icon: './assets/icons/Venusaur.png',
    audio: './assets/audio/Venusaur.ogg',
    attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam'],
    isLegendary: false,
    generation: '1'
  }
];
