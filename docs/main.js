(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+tMd":
/*!********************************************!*\
  !*** ./src/app/shared/enums/stone.enum.ts ***!
  \********************************************/
/*! exports provided: StoneEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneEnum", function() { return StoneEnum; });
var StoneEnum;
(function (StoneEnum) {
    StoneEnum["fire"] = "../../assets/icons/Fire_Stone.png";
    StoneEnum["water"] = "../../assets/icons/Water_Stone.png";
    StoneEnum["thunder"] = "../../assets/icons/Thunder_Stone.png";
    StoneEnum["moon"] = "../../assets/icons/Moon_Stone.png";
    StoneEnum["leaf"] = "../../assets/icons/Leaf_Stone.png";
})(StoneEnum || (StoneEnum = {}));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jerem\IdeaProjects\Angular-11\pokedex\src\main.ts */"zUnb");


/***/ }),

/***/ "09Fq":
/*!********************************************************!*\
  !*** ./src/app/shared/services/all-pokemon.service.ts ***!
  \********************************************************/
/*! exports provided: AllPokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPokemonService", function() { return AllPokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/types.enum */ "TLjL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enums/color.enum */ "m7LA");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/stone.enum */ "+tMd");







let AllPokemonService = class AllPokemonService {
    constructor(http) {
        this.http = http;
        this.pokemonArray = [
            {
                id: 1,
                name: 'Bulbasaur',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass],
                height: '0.7 m',
                weight: '6.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor],
                img: './assets/images/Bulbasaur.png',
                audio: './assets/audio/Bulbasaur.ogg',
                description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 2,
                name: 'Ivysaur',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass],
                height: '1.0 m',
                weight: '13 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor],
                img: './assets/images/Ivysaur.png',
                audio: './assets/audio/Ivysaur.ogg',
                description: 'The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom. ',
                attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam']
            },
            {
                id: 3,
                name: 'Venusaur',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass],
                height: '2.0 m',
                weight: '100.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor],
                img: './assets/images/Venusaur.png',
                audio: './assets/audio/Venusaur.ogg',
                description: 'The flower on its back catches the sun\'s rays. The sunlight is then absorbed and used for energy. ',
                attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam']
            },
            {
                id: 4,
                name: 'Charmander',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '0.6 m',
                weight: '8.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Charmander.png',
                audio: './assets/audio/Charmander.ogg',
                description: 'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 5,
                name: 'Charmeleon',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.1 m',
                weight: '19.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Charmeleon.png',
                audio: './assets/audio/Charmeleon.ogg',
                description: 'Tough fights could excite this Pokémon. When excited, it may blow out bluish-white flames. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 6,
                name: 'Charizard',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.7 m',
                weight: '90.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Charizard.png',
                audio: './assets/audio/Charizard.ogg',
                description: 'When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 7,
                name: 'Squirtle',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.5 m',
                weight: '9.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Squirtle.png',
                audio: './assets/audio/Squirtle.ogg',
                description: 'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 8,
                name: 'Wartortle',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.0 m',
                weight: '22.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Wartortle.png',
                audio: './assets/audio/Wartortle.ogg',
                description: 'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 9,
                name: 'Blastoise',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.6m',
                weight: '85.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Blastoise.png',
                audio: './assets/audio/Blastoise.ogg',
                description: 'Once it takes aim at its enemy, it blasts out water with even more force than a fire hose. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 10,
                name: 'Caterpie',
                evolutionLevel: 7,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '0.3 m',
                weight: '2.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Caterpie.png',
                audio: './assets/audio/Caterpie.ogg',
                description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 11,
                name: 'Metapod',
                evolutionLevel: 10,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '0.7 m',
                weight: '9.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Metapod.png',
                audio: './assets/audio/Metapod.ogg',
                description: 'Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 12,
                name: 'Butterfree',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '1.1 m',
                weight: '32.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Butterfree.png',
                audio: './assets/audio/Butterfree.ogg',
                description: 'Its wings, covered with poisonous powders, repel water. This allows it to fly in the rain. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 13,
                name: 'Weedle',
                evolutionLevel: 7,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '0.3 m',
                weight: '3.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Weedle.png',
                audio: './assets/audio/Weedle.ogg',
                description: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 14,
                name: 'Kakuna',
                evolutionLevel: 10,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '0.6 m',
                weight: '10.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Kakuna.png',
                audio: './assets/audio/Kakuna.ogg',
                description: 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 15,
                name: 'Beedrill',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '1.0 m',
                weight: '29.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Beedrill.png',
                audio: './assets/audio/Beedrill.ogg',
                description: 'It has 3 poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 16,
                name: 'Pidgey',
                evolutionLevel: 18,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '0.3 m',
                weight: '1.8 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Pidgey.png',
                audio: './assets/audio/Pidgey.ogg',
                description: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 17,
                name: 'Pidgeotto',
                evolutionLevel: 36,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.1 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Pidgeotto.png',
                audio: './assets/audio/Pidgeotto.ogg',
                description: 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 18,
                name: 'Pidgeot',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.5 m',
                weight: '39.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Pidgeot.png',
                audio: './assets/audio/Pidgeot.ogg',
                description: 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 19,
                name: 'Rattata',
                evolutionLevel: 20,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '0.3 m',
                weight: '3.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Rattata.png',
                audio: './assets/audio/Rattata.ogg',
                description: 'Will chew on anything with its fangs. If you see one, it is certain that 40 more live in the area. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 20,
                name: 'Raticate',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '0.7 m',
                weight: '18.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Raticate.png',
                audio: './assets/audio/Raticate.ogg',
                description: 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 21,
                name: 'Spearow',
                evolutionLevel: 20,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '0.3 m',
                weight: '2.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Spearow.png',
                audio: './assets/audio/Spearow.ogg',
                description: 'Inept at flying high. However, it can fly around very fast to protect its territory. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 22,
                name: 'Fearow',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.2 m',
                weight: '38.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Fearow.png',
                audio: './assets/audio/Fearow.ogg',
                description: 'A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 23,
                name: 'Ekans',
                evolutionLevel: 22,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '2.0 m',
                weight: '6.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Ekans.png',
                audio: './assets/audio/Ekans.ogg',
                description: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 24,
                name: 'Arbok',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '3.5 m',
                weight: '65.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Arbok.png',
                audio: './assets/audio/Arbok.ogg',
                description: 'The frightening patterns on its belly have been studied. Six variations have been confirmed. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 25,
                name: 'Pikachu',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].thunder],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric],
                height: '0.4 m',
                weight: '6.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor],
                img: './assets/images/Pikachu.png',
                audio: './assets/audio/Pikachu.ogg',
                description: 'It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 26,
                name: 'Raichu',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric],
                height: '0.8 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor],
                img: './assets/images/Raichu.png',
                audio: './assets/audio/Raichu.ogg',
                description: 'When electricity builds up inside its body, it becomes feisty. It also glows in the dark. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 27,
                name: 'Sandshrew',
                evolutionLevel: 22,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '0.6 m',
                weight: '12.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Sandshrew.png',
                audio: './assets/audio/Sandshrew.ogg',
                description: 'Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 28,
                name: 'Sandslash',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '1.0 m',
                weight: '29.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Sandslash.png',
                audio: './assets/audio/Sandslash.ogg',
                description: 'It is skilled at slashing enemies with its claws. If broken, they start to grow back in a day. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 29,
                name: 'Nidoran♀',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.4 m',
                weight: '7.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Nidoran♀.png',
                audio: './assets/audio/Nidoran.ogg',
                description: 'A mild-mannered Pokémon that does not like to fight. Beware, its small horns secrete venom. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 30,
                name: 'Nidorina',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.7 m',
                weight: '6.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Nidorina.png',
                audio: './assets/audio/Nidorina.ogg',
                description: 'When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 31,
                name: 'Nidoqueen',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '1.3 m',
                weight: '60.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Nidoqueen.png',
                audio: './assets/audio/Nidoqueen.ogg',
                description: 'Tough scales cover the sturdy body of this Pokémon. It appears that the scales grow in cycles. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 32,
                name: 'Nidoran♂',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.5 m',
                weight: '9.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Nidoran♂.png',
                audio: './assets/audio/Nidoran.ogg',
                description: 'Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 33,
                name: 'Nidorino',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.9 m',
                weight: '19.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Nidorino.png',
                audio: './assets/audio/Nidorino.ogg',
                description: 'Its horns contain venom. If they are stabbed into an enemy, the impact makes the poison leak out. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 34,
                name: 'Nidoking',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '1.4 m',
                weight: '62.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Nidoking.png',
                audio: './assets/audio/Nidoking.ogg',
                description: 'Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 35,
                name: 'Clefairy',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fairy],
                height: '0.6 m',
                weight: '7.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fairyColor],
                img: './assets/images/Clefairy.png',
                audio: './assets/audio/Clefairy.ogg',
                description: 'Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 36,
                name: 'Clefable',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fairy],
                height: '1.3 m',
                weight: '40.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fairyColor],
                img: './assets/images/Clefable.png',
                audio: './assets/audio/Clefable.ogg',
                description: 'They appear to be very protective of their own world. It is a kind of fairy, rarely seen by people. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 37,
                name: 'Vulpix',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].fire],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '0.6 m',
                weight: '9.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Vulpix.png',
                audio: './assets/audio/Vulpix.ogg',
                description: 'Both its fur and its tails are beautiful. As it grows, the tails split and form more tails. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 38,
                name: 'Ninetales',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.1 m',
                weight: '19.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Ninetales.png',
                audio: './assets/audio/Ninetales.ogg',
                description: 'According to an enduring legend, 9 noble saints were united and reincarnated as this Pokémon. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 39,
                name: 'Jigglypuff',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fairy],
                height: '0.5 m',
                weight: '5.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fairyColor],
                img: './assets/images/Jigglypuff.png',
                audio: './assets/audio/Jigglypuff.ogg',
                description: 'Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 40,
                name: 'Wigglytuff',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fairy],
                height: '1.0 m',
                weight: '12.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fairyColor],
                img: './assets/images/Wigglytuff.png',
                audio: './assets/audio/Wigglytuff.ogg',
                description: 'Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 41,
                name: 'Zubat',
                evolutionLevel: 22,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '0.8 m',
                weight: '7.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Zubat.png',
                audio: './assets/audio/Zubat.ogg',
                description: 'Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 42,
                name: 'Golbat',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.6 m',
                weight: '55.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Golbat.png',
                audio: './assets/audio/Golbat.ogg',
                description: 'It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 43,
                name: 'Oddish',
                evolutionLevel: 21,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.5 m',
                weight: '5.4 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Oddish.png',
                audio: './assets/audio/Oddish.ogg',
                description: 'It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 44,
                name: 'Gloom',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].leaf],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.8 m',
                weight: '8.6 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Gloom.png',
                audio: './assets/audio/Gloom.ogg',
                description: 'Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 45,
                name: 'Vileplume',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.2 m',
                weight: '18.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Vileplume.png',
                audio: './assets/audio/Vileplume.ogg',
                description: 'Flaps its broad flower petals to scatter its poisonous pollen. The flapping sound is very loud. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 46,
                name: 'Paras',
                evolutionLevel: 24,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass],
                height: '0.3 m',
                weight: '5.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor],
                img: './assets/images/Paras.png',
                audio: './assets/audio/Paras.ogg',
                description: 'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 47,
                name: 'Parasect',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass],
                height: '1.0 m',
                weight: '29.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor],
                img: './assets/images/Parasect.png',
                audio: './assets/audio/Parasect.ogg',
                description: 'The bug host is drained of energy by the mushrooms on its back. They appear to do all the thinking. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 48,
                name: 'Venonat',
                evolutionLevel: 31,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.0 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Venonat.png',
                audio: './assets/audio/Venonat.ogg',
                description: 'Its large eyes act as radars. In a bright place, you can see that they are clusters of many tiny eyes. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 49,
                name: 'Venomoth',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.5 m',
                weight: '12.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Venomoth.png',
                audio: './assets/audio/Venomoth.ogg',
                description: 'The powdery scales on its wings are hard to remove. They also contain poison that leaks out on contact. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 50,
                name: 'Diglett',
                evolutionLevel: 26,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '0.2 m',
                weight: '0.8 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Diglett.png',
                audio: './assets/audio/Diglett.ogg',
                description: 'It prefers dark places. It spends most of its time underground, though it may pop up in caves. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 51,
                name: 'Dugtrio',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '0.7 m',
                weight: '33.3 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Dugtrio.png',
                audio: './assets/audio/Dugtrio.ogg',
                description: 'A team of triplets that can burrow over 60 MPH. Due to this, some people think it\'s an earthquake. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 52,
                name: 'Meowth',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '0.4 m',
                weight: '4.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Meowth.png',
                audio: './assets/audio/Meowth.ogg',
                description: 'Appears to be more active at night. It loves round and shiny things. It can\'t stop from picking them up. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 53,
                name: 'Persian',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '1.0 m',
                weight: '32.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Persian.png',
                audio: './assets/audio/Persian.ogg',
                description: 'The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 54,
                name: 'Psyduck',
                evolutionLevel: 33,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.8 m',
                weight: '19.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Psyduck.png',
                audio: './assets/audio/Psyduck.ogg',
                description: 'Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 55,
                name: 'Golduck',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.7 m',
                weight: '76.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Golduck.png',
                audio: './assets/audio/Golduck.ogg',
                description: 'Its slim and long limbs end in broad flippers. They are used for swimming gracefully in lakes. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 56,
                name: 'Mankey',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '0.5 m',
                weight: '28.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Mankey.png',
                audio: './assets/audio/Mankey.ogg',
                description: 'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 57,
                name: 'Primeape',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '1.0 m',
                weight: '32.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Primeape.png',
                audio: './assets/audio/Primeape.ogg',
                description: 'It stops being angry only when nobody else is around. To view this moment is very difficult. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 58,
                name: 'Growlithe',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].fire],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '0.7 m',
                weight: '19.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Growlithe.png',
                audio: './assets/audio/Growlithe.ogg',
                description: 'A Pokémon with a friendly nature. However, it will bark fiercely at anything invading its territory. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 59,
                name: 'Arcanine',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.9 m',
                weight: '155.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Arcanine.png',
                audio: './assets/audio/Arcanine.ogg',
                description: 'A legendary Pokémon in China. Many people are charmed by its grace and beauty while running. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 60,
                name: 'Poliwag',
                evolutionLevel: 25,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.6 m',
                weight: '12.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Poliwag.png',
                audio: './assets/audio/Poliwag.ogg',
                description: 'The direction of the spiral on the belly differs by area. It is more adept at swimming than walking. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 61,
                name: 'Poliwhirl',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].water],
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.0 m',
                weight: '20.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Poliwhirl.png',
                audio: './assets/audio/Poliwhirl.ogg',
                description: 'Under attack, it uses its belly spiral to put the foe to sleep. It then makes its escape. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 62,
                name: 'Poliwrath',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '1.3 m',
                weight: '54.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Poliwrath.png',
                audio: './assets/audio/Poliwrath.ogg',
                description: 'Swims powerfully using all the muscles in its body. It can even overtake champion swimmers. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 63,
                name: 'Abra',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '0.9 m',
                weight: '19.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Abra.png',
                audio: './assets/audio/Abra.ogg',
                description: 'Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 64,
                name: 'Kadabra',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.3 m',
                weight: '56.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Kadabra.png',
                audio: './assets/audio/Kadabra.ogg',
                description: 'Many odd things happen if this Pokémon is close by. For example, it makes clocks run backwards. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 65,
                name: 'Alakazam',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.5 m',
                weight: '48.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Alakazam.png',
                audio: './assets/audio/Alakazam.ogg',
                description: 'A Pokémon that can memorize anything. It never forgets what it learns—that\'s why this Pokémon is smart. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 66,
                name: 'Machop',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '0.8 m',
                weight: '19.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Machop.png',
                audio: './assets/audio/Machop.ogg',
                description: 'Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 67,
                name: 'Machoke',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '1.5 m',
                weight: '70.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Machoke.png',
                audio: './assets/audio/Machoke.ogg',
                description: 'The belt around its waist holds back its energy. Without it, this Pokémon would be unstoppable. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 68,
                name: 'Machamp',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '1.6 m',
                weight: '130.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Machamp.png',
                audio: './assets/audio/Machamp.ogg',
                description: 'One arm alone can move mountains. Using all four arms, this Pokémon fires off awesome punches. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 69,
                name: 'Bellsprout',
                evolutionLevel: 21,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.7 m',
                weight: '4.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Bellsprout.png',
                audio: './assets/audio/Bellsprout.ogg',
                description: 'Prefers hot and humid places. It ensnares tiny insects with its vines and devours them. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 70,
                name: 'Weepinbell',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].leaf],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.0 m',
                weight: '6.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Weepinbell.png',
                audio: './assets/audio/Weepinbell.ogg',
                description: 'When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 71,
                name: 'Victreebel',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.7 m',
                weight: '15.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Victreebel.png',
                audio: './assets/audio/Victreebel.ogg',
                description: 'Lures prey with the sweet aroma of honey. Swallowed whole, the prey is melted in a day, bones and all. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 72,
                name: 'Tentacool',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.9 m',
                weight: '45.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Tentacool.png',
                audio: './assets/audio/Tentacool.ogg',
                description: 'It can sometimes be found all dry and shriveled up on a beach. Toss it back into the sea to revive it. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 73,
                name: 'Tentacruel',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.6 m',
                weight: '55.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Tentacruel.png',
                audio: './assets/audio/Tentacruel.ogg',
                description: 'Its 80 tentacles can stretch and contract freely. They wrap around prey and weaken it with poison. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 74,
                name: 'Geodude',
                evolutionLevel: 25,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '0.4 m',
                weight: '20.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Geodude.png',
                audio: './assets/audio/Geodude.ogg',
                description: 'Commonly found near mountain trails, etc. If you step on one by accident, it gets angry. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 75,
                name: 'Graveler',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '1.0 m',
                weight: '105.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Graveler.png',
                audio: './assets/audio/Graveler.ogg',
                description: 'Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 76,
                name: 'Golem',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '1.4 m',
                weight: '300.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Golem.png',
                audio: './assets/audio/Golem.ogg',
                description: 'Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it\'s exposed to air. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 77,
                name: 'Ponyta',
                evolutionLevel: 40,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.0 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Ponyta.png',
                audio: './assets/audio/Ponyta.ogg',
                description: 'Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 78,
                name: 'Rapidash',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.7 m',
                weight: '95.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Rapidash.png',
                audio: './assets/audio/Rapidash.ogg',
                description: 'Just loves to run. If it sees something faster than itself, it will give chase at top speed. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 79,
                name: 'Slowpoke',
                evolutionLevel: 37,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.2 m',
                weight: '36.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Slowpoke.png',
                audio: './assets/audio/Slowpoke.ogg',
                description: 'Incredibly slow and sluggish. It is quite content to loll about without worrying about the time. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 80,
                name: 'Slowbro',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.6 m',
                weight: '78.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Slowbro.png',
                audio: './assets/audio/Slowbro.ogg',
                description: 'Lives lazily by the sea. If the Shellder on its tail comes off, it becomes a Slowpoke again. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 81,
                name: 'Magnemite',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].steel],
                height: '0.3 m',
                weight: '6.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].steelColor],
                img: './assets/images/Magnemite.png',
                audio: './assets/audio/Magnemite.ogg',
                description: 'It is born with the ability to defy gravity. It floats in air on powerful electromagnetic waves. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 82,
                name: 'Magneton',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].steel],
                height: '1.0 m',
                weight: '60.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].steelColor],
                img: './assets/images/Magneton.png',
                audio: './assets/audio/Magneton.ogg',
                description: 'Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 83,
                name: 'Farfetch\'d',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '0.8 m',
                weight: '15.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Farfetch\'d.png',
                audio: './assets/audio/Farfetch\'d.ogg',
                description: 'Lives where reedy plants grow. They are rarely seen, so it\'s thought their numbers are decreasing. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 84,
                name: 'Doduo',
                evolutionLevel: 31,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.4 m',
                weight: '39.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Doduo.png',
                audio: './assets/audio/Doduov.ogg',
                description: 'Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 85,
                name: 'Dodrio',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.8 m',
                weight: '85.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Dodrio.png',
                audio: './assets/audio/Dodrio.ogg',
                description: 'One of Doduo\'s 2 heads splits to form a unique species. It runs close to 40 MPH in prairies. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 86,
                name: 'Seel',
                evolutionLevel: 34,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.1 m',
                weight: '90.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Seel.png',
                audio: './assets/audio/Seel.ogg',
                description: 'Loves freezing cold conditions. Relishes swimming in a frigid climate of around 14F degrees. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 87,
                name: 'Dewgong',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ice],
                height: '1.7 m',
                weight: '120.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].iceColor],
                img: './assets/images/Dewgong.png',
                audio: './assets/audio/Dewgong.ogg',
                description: 'Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 88,
                name: 'Grimer',
                evolutionLevel: 38,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.9 m',
                weight: '30.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Grimer.png',
                audio: './assets/audio/Grimer.ogg',
                description: 'Made of hardened sludge. It smells too putrid to touch. Even weeds won\'t grow in its path. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 89,
                name: 'Muk',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.2 m',
                weight: '30.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Muk.png',
                audio: './assets/audio/Muk.ogg',
                description: 'Smells so awful, it can cause fainting. Through degeneration, it lost its sense of smell. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 90,
                name: 'Shellder',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].water],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.3 m',
                weight: '4.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Shellder.png',
                audio: './assets/audio/Shellder.ogg',
                description: 'The shell can withstand any attack. However, when it is open, the tender body is exposed. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 91,
                name: 'Cloyster',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ice],
                height: '1.5 m',
                weight: '132.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].iceColor],
                img: './assets/images/Cloyster.png',
                audio: './assets/audio/Cloyster.ogg',
                description: 'For protection, it uses its harder-than-diamonds shell. It also shoots spikes from the shell. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 92,
                name: 'Gastly',
                evolutionLevel: 25,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ghost, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.3 m',
                weight: '0.1 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].ghostColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Gastly.png',
                audio: './assets/audio/Gastly.ogg',
                description: 'Said to appear in decrepit, deserted buildings. It has no real shape as it appears to be made of a gas. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 93,
                name: 'Haunter',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ghost, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.6 m',
                weight: '0.1 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].ghostColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Haunter.png',
                audio: './assets/audio/Haunter.ogg',
                description: 'By licking, it saps the victim\'s life. It causes shaking that won\'t stop until the victim\'s demise. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 94,
                name: 'Gengar',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ghost, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.5 m',
                weight: '40.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].ghostColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Gengar.png',
                audio: './assets/audio/Gengar.ogg',
                description: 'A Gengar is close by if you feel a sudden chill. It may be trying to lay a curse on you. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 95,
                name: 'Onix',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock],
                height: '8.8 m',
                weight: '210.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor],
                img: './assets/images/Onix.png',
                audio: './assets/audio/Onix.ogg',
                description: 'Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 96,
                name: 'Drowzee',
                evolutionLevel: 26,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.0 m',
                weight: '32.4 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Drowzee.png',
                audio: './assets/audio/Drowzee.ogg',
                description: 'If you sleep by it all the time, it will sometimes show you dreams it has eaten in the past. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 97,
                name: 'Hypno',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.6 m',
                weight: '75.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Hypno.png',
                audio: './assets/audio/Hypno.ogg',
                description: 'Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 98,
                name: 'Krabby',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.4 m',
                weight: '6.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Krabby.png',
                audio: './assets/audio/Krabby.ogg',
                description: 'Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 99,
                name: 'Kingler',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.3 m',
                weight: '60.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Kingler.png',
                audio: './assets/audio/Kingler.ogg',
                description: 'One claw grew massively and as hard as steel. It has 10,000-HP strength. However, it is too heavy. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 100,
                name: 'Voltorb',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric],
                height: '0.5 m',
                weight: '10.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor],
                img: './assets/images/Voltorb.png',
                audio: './assets/audio/Voltorb.ogg',
                description: 'It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 101,
                name: 'Electrode',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric],
                height: '1.2 m',
                weight: '66.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor],
                img: './assets/images/Electrode.png',
                audio: './assets/audio/Electrode.ogg',
                description: 'Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 102,
                name: 'Exeggcute',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].leaf],
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '0.4 m',
                weight: '2.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Exeggcute.png',
                audio: './assets/audio/Exeggcute.ogg',
                description: 'The heads attract each other and spin around. There must be 6 heads for it to maintain balance. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 103,
                name: 'Exeggutor',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '2.0 m',
                weight: '120.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Exeggutor.png',
                audio: './assets/audio/Exeggutor.ogg',
                description: 'Its cries are very noisy. This is because each of the three heads thinks about whatever it likes. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 104,
                name: 'Cubone',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '0.4 m',
                weight: '6.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Cubone.png',
                audio: './assets/audio/Cubone.ogg',
                description: 'Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 105,
                name: 'Marowak',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground],
                height: '1.0 m',
                weight: '45.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor],
                img: './assets/images/Marowak.png',
                audio: './assets/audio/Marowak.ogg',
                description: 'Small and weak, this Pokémon is adept with its Bone Club. It has grown more vicious over the ages. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 106,
                name: 'Hitmonlee',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '1.5 m',
                weight: '49.8 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Hitmonlee.png',
                audio: './assets/audio/Hitmonlee.ogg',
                description: 'When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 107,
                name: 'Hitmonchan',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fighting],
                height: '1.4 m',
                weight: '50.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fightingColor],
                img: './assets/images/Hitmonchan.png',
                audio: './assets/audio/Hitmonchan.ogg',
                description: 'Punches in corkscrew fashion. It can punch its way through a concrete wall in the same way as a drill. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 108,
                name: 'Lickitung',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '1.2 m',
                weight: '65.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Lickitung.png',
                audio: './assets/audio/Lickitung.ogg',
                description: 'Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 109,
                name: 'Koffing',
                evolutionLevel: 35,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '0.6 m',
                weight: '1.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Koffing.png',
                audio: './assets/audio/Koffing.ogg',
                description: 'In hot places, its internal gases could expand and explode without any warning. Be very careful! ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 110,
                name: 'Weezing',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].poison],
                height: '1.2 m',
                weight: '9.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].poisonColor],
                img: './assets/images/Weezing.png',
                audio: './assets/audio/Weezing.ogg',
                description: 'It lives and grows by absorbing dust, germs, and poison gases that are contained in toxic waste and garbage. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 111,
                name: 'Rhyhorn',
                evolutionLevel: 42,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock],
                height: '1.0 m',
                weight: '115.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor],
                img: './assets/images/Rhyhorn.png',
                audio: './assets/audio/Rhyhorn.ogg',
                description: 'A Pokémon with a one-track mind. Once it charges, it won\'t stop running until it falls asleep. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 112,
                name: 'Rhydon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ground, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock],
                height: '1.9 m',
                weight: '120.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].groundColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor],
                img: './assets/images/Rhydon.png',
                audio: './assets/audio/Rhydon.ogg',
                description: 'Walks on its hind legs. Shows signs of intelligence. Its armor-like hide even repels molten lava. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 113,
                name: 'Chansey',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '1.1 m',
                weight: '34.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Chansey.png',
                audio: './assets/audio/Chansey.ogg',
                description: 'A gentle and kind-hearted Pokémon that shares its nutritious eggs if it sees an injured Pokémon. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 114,
                name: 'Tangela',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].grass],
                height: '1.0 m',
                weight: '35.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].grassColor],
                img: './assets/images/Tangela.png',
                audio: './assets/audio/Tangela.ogg',
                description: 'Its identity is obscured by masses of thick, blue vines. The vines are said to never stop growing. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 115,
                name: 'Kangaskhan',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '2.2 m',
                weight: '80.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Kangaskhan.png',
                audio: './assets/audio/Kangaskhan.ogg',
                description: 'Raises its young in its belly pouch. Won\'t run from any fight to keep its young protected. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 116,
                name: 'Horsea',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.4 m',
                weight: '8.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Horsea.png',
                audio: './assets/audio/Horsea.ogg',
                description: 'If it senses any danger, it will vigorously spray water or a special type of ink from its mouth.  ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 117,
                name: 'Seadra',
                evolutionLevel: 33,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.6 m',
                weight: '15.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Seadra.png',
                audio: './assets/audio/Seadra.ogg',
                description: 'Touching the back fin causes numbness. It hooks its tail to coral to stay in place while sleeping. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 118,
                name: 'Goldeen',
                evolutionLevel: 33,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.6 m',
                weight: '15.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Goldeen.png',
                audio: './assets/audio/Goldeen.ogg',
                description: 'When it is time for them to lay eggs, they can be seen swimming up rivers and falls in large groups. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 119,
                name: 'Seaking',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.3 m',
                weight: '39.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Seaking.png',
                audio: './assets/audio/Seaking.ogg',
                description: 'It is the male\'s job to make a nest by carving out boulders in a stream using the horn on its head. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 120,
                name: 'Staryu',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].water],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.8 m',
                weight: '34.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Staryu.png',
                audio: './assets/audio/Staryu.ogg',
                description: 'As long as the center section is unharmed, it can grow back fully even if it is chopped to bits. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 121,
                name: 'Starmie',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.1 m',
                weight: '80.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Starmie.png',
                audio: './assets/audio/Starmie.ogg',
                description: 'The center section is named the core. People think it is communicating when it glows in 7 colors. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 122,
                name: 'Mr. Mime',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fairy],
                height: '1.3 m',
                weight: '54.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fairyColor],
                img: './assets/images/MrMime.png',
                audio: './assets/audio/MrMime.ogg',
                description: 'Always practices its pantomime act. It makes enemies believe something exists that really doesn\'t. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 123,
                name: 'Scyther',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.5 m',
                weight: '56.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Scyther.png',
                audio: './assets/audio/Scyther.ogg',
                description: 'Leaps out of tall grass and slices prey with its scythes. The movement looks like that of a ninja. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 124,
                name: 'Jynx',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ice, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '1.4 m',
                weight: '40.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].iceColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Jynx.png',
                audio: './assets/audio/Jynx.ogg',
                description: 'Appears to move to a rhythm of its own, as if it were dancing. It wiggles its hips as it walks. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 125,
                name: 'Electabuzz',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric],
                height: '1.1 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor],
                img: './assets/images/Electabuzz.png',
                audio: './assets/audio/Electabuzz.ogg',
                description: 'If a major power outage occurs, it is certain that this Pokémon has eaten electricity at a power plant. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 126,
                name: 'Magmar',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '1.3 m',
                weight: '44.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Magmar.png',
                audio: './assets/audio/Magmar.ogg',
                description: 'Born in an active volcano. Its body is always cloaked in flames, so it looks like a big ball of fire. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 127,
                name: 'Pinsir',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].bug],
                height: '1.5 m',
                weight: '55.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].bugColor],
                img: './assets/images/Pinsir.png',
                audio: './assets/audio/Pinsir.ogg',
                description: 'Grips its prey in its pincers and squeezes hard! It can\'t move if it\'s cold, so it lives in warm places. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 128,
                name: 'Tauros',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '1.4 m',
                weight: '88.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Tauros.png',
                audio: './assets/audio/Tauros.ogg',
                description: 'A rowdy Pokémon with a lot of stamina. Once running, it won\'t stop until it hits something. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 129,
                name: 'Magikarp',
                evolutionLevel: 20,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.9 m',
                weight: '10.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Magikarp.png',
                audio: './assets/audio/Magikarp.ogg',
                description: 'Famous for being very unreliable. It can be found swimming in seas, lakes, rivers and shallow puddles. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 130,
                name: 'Gyarados',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '6.5 m',
                weight: '235.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Gyarados.png',
                audio: './assets/audio/Gyarados.ogg',
                description: 'Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 131,
                name: 'Lapras',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ice],
                height: '2.5 m',
                weight: '220.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].iceColor],
                img: './assets/images/Lapras.png',
                audio: './assets/audio/Lapras.ogg',
                description: 'A gentle soul that can read the minds of people. It can ferry people across the sea on its back. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 132,
                name: 'Ditto',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '0.3 m',
                weight: '4.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Ditto.png',
                audio: './assets/audio/Ditto.ogg',
                description: 'When it spots an enemy, its body transforms into an almost perfect copy of its opponent. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 133,
                name: 'Eevee',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].water, _enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].thunder, _enums_stone_enum__WEBPACK_IMPORTED_MODULE_6__["StoneEnum"].fire],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '0.3 m',
                weight: '6.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Eevee.png',
                audio: './assets/audio/Eevee.ogg',
                description: 'Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 134,
                name: 'Vaporeon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.0 m',
                weight: '29.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Vaporeon.png',
                audio: './assets/audio/Vaporeon.ogg',
                description: 'Its cell structure is similar to water molecules. It will melt away and become invisible in water. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 135,
                name: 'Jolteon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric],
                height: '0.8 m',
                weight: '24.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor],
                img: './assets/images/Jolteon.png',
                audio: './assets/audio/Jolteon.ogg',
                description: 'A sensitive Pokémon that easily becomes sad or angry. Every time its mood changes, it charges power. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 136,
                name: 'Flareon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire],
                height: '0.9 m',
                weight: '25.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor],
                img: './assets/images/Flareon.png',
                audio: './assets/audio/Flareon.ogg',
                description: 'It has a flame chamber inside its body. It inhales, then blows out fire that is over 3,000F degrees. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 137,
                name: 'Porygon',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '0.8 m',
                weight: '36.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Porygon.png',
                audio: './assets/audio/Porygon.ogg',
                description: 'The only Pokémon people anticipate can fly into space. None has managed the feat yet, however. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 138,
                name: 'Omanyte',
                evolutionLevel: 40,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.4 m',
                weight: '7.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Omanyte.png',
                audio: './assets/audio/Omanyte.ogg',
                description: 'An ancient Pokémon that was recovered from a fossil. It swims by cleverly twisting its 10 tentacles about. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 139,
                name: 'Omastar',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.0 m',
                weight: '35.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Omastar.png',
                audio: './assets/audio/Omastar.ogg',
                description: 'Sharp beaks ring its mouth. Its shell was too big for it to move freely, so it became extinct. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 140,
                name: 'Kabuto',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '0.5 m',
                weight: '11.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Kabuto.png',
                audio: './assets/audio/Kabuto.ogg',
                description: 'A Pokémon that was recovered from a fossil. It uses the eyes on its back while hiding on the sea floor. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 141,
                name: 'Kabutops',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].water],
                height: '1.3 m',
                weight: '40.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].waterColor],
                img: './assets/images/Kabutops.png',
                audio: './assets/audio/Kabutops.ogg',
                description: 'A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 142,
                name: 'Aerodactyl',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.8 m',
                weight: '59.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Aerodactyl.png',
                audio: './assets/audio/Aerodactyl.ogg',
                description: 'A savage Pokémon that died out in ancient times. It was resurrected using DNA taken from amber. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 143,
                name: 'Snorlax',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].normal],
                height: '2.1 m',
                weight: '460.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].normalColor],
                img: './assets/images/Snorlax.png',
                audio: './assets/audio/Snorlax.ogg',
                description: 'Will eat anything, even if the food happens to be a little moldy. It never gets an upset stomach. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 144,
                name: 'Articuno',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].ice, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.7 m',
                weight: '55.4 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].iceColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Articuno.png',
                audio: './assets/audio/Articuno.ogg',
                description: 'A legendary bird Pokémon. It freezes water that is contained in winter air and makes it snow. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 145,
                name: 'Zapdos',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].electric, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '1.6 m',
                weight: '52.6 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].electricColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Zapdos.png',
                audio: './assets/audio/Zapdos.ogg',
                description: 'This legendary bird Pokémon is said to appear when the sky turns dark and lightning showers down. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 146,
                name: 'Moltres',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].fire, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '2.0 m',
                weight: '60.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].fireColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Moltres.png',
                audio: './assets/audio/Moltres.ogg',
                description: 'A legendary bird Pokémon. As it flaps its blazing wings, even the night sky will turn red. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 147,
                name: 'Dratini',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].dragon],
                height: '1.8 m',
                weight: '3.3 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].dragonColor],
                img: './assets/images/Dratini.png',
                audio: './assets/audio/Dratini.ogg',
                description: 'The existence of this mythical Pokémon was only recently confirmed by a fisherman who caught one. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 148,
                name: 'Dragonair',
                evolutionLevel: 55,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].dragon],
                height: '1.1 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].dragonColor],
                img: './assets/images/Dragonair.png',
                audio: './assets/audio/Dragonair.ogg',
                description: 'According to a witness, its body was surrounded by a strange aura that gave it a mystical look. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 149,
                name: 'Dragonite',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].dragon, _enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].flying],
                height: '2.2 m',
                weight: '210 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].dragonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].flyingColor],
                img: './assets/images/Dragonite.png',
                audio: './assets/audio/Dragonite.ogg',
                description: 'It is said that this Pokémon lives somewhere in the sea and that it flies. However, it is only a rumor. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 150,
                name: 'Mewtwo',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '2.0 m',
                weight: '122 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Mewtwo.png',
                audio: './assets/audio/Mewtwo.ogg',
                description: 'Its DNA is almost the same as Mew\'s. However, its size and disposition are vastly different. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 151,
                name: 'Mew',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_2__["TypesEnum"].psychic],
                height: '0.4 m',
                weight: '4.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_4__["ColorEnum"].psychicColor],
                img: './assets/images/Mew.png',
                audio: './assets/audio/Mew.ogg',
                description: 'When viewed through a microscope, this Pokémon\'s short, fine, delicate hair can be seen. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
        ];
    }
    getDetailsPokemon(id) {
        return this.pokemonArray[id - 1];
    }
    getAllPokemons() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.pokemonArray);
    }
};
AllPokemonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AllPokemonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AllPokemonService);



/***/ }),

/***/ "5TcM":
/*!*********************************************************************!*\
  !*** ./src/app/components/all-pokemons/all-pokemons.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  color: #0d0d0d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGwtcG9rZW1vbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiYWxsLXBva2Vtb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudCB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LCLT":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all-pokemons/all-pokemons.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let pokemon of (allPokemon.getAllPokemons() | async)\" sizeXs=\"11\" sizeLg=\"2\">\r\n        <ion-card (click)=\"goToDetails(pokemon.id)\"\r\n                  *ngIf=\"pokemon.types.length == 1\"\r\n                  [style.background-color]=\"pokemon.color[0]\"\r\n                  style=\"cursor: pointer\"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>#{{pokemon.id}} {{'NAMES.' + pokemon.name | translate}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"pokemon.types.length == 1\">\r\n            {{'NAMES.' + pokemon.name | translate}} {{'CARD_SUBJECT_ONE' | translate}}\r\n            {{'TYPES.' + pokemon.types[0] | translate}} {{'POKEMON' | translate}}\r\n          </ion-card-content>\r\n          <ion-card-content *ngIf=\"pokemon.types.length > 1\">\r\n            {{'NAMES.' + pokemon.name | translate}} {{'CARD_SUBJECT_TWO' | translate}} {{'TYPES.' + pokemon.types[0] | translate}}/{{'TYPES.' + pokemon.types[1] | translate}} {{'POKEMON' | translate}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <ion-card (click)=\"goToDetails(pokemon.id)\"\r\n                  *ngIf=\"pokemon.types.length > 1\"\r\n                  [style.background]=\"'linear-gradient(to right,'+ pokemon.color[0] + ',' + pokemon.color[1]+ ')'\"\r\n                  style=\"cursor: pointer\"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>#{{pokemon.id}} {{'NAMES.' + pokemon.name | translate}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"pokemon.types.length == 1\">\r\n            {{'NAMES.' + pokemon.name | translate}} {{'CARD_SUBJECT_ONE' | translate}}\r\n            {{'TYPES.' + pokemon.types[0] | translate}} {{'POKEMON' | translate}}\r\n          </ion-card-content>\r\n          <ion-card-content *ngIf=\"pokemon.types.length > 1\">\r\n            {{'NAMES.' + pokemon.name | translate}} {{'CARD_SUBJECT_TWO' | translate}} {{'TYPES.' + pokemon.types[0] | translate}}/{{'TYPES.' + pokemon.types[1] | translate}} {{'POKEMON' | translate}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Sm+d":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-pokemons/all-pokemons.component.ts ***!
  \*******************************************************************/
/*! exports provided: AllPokemonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllPokemonsComponent", function() { return AllPokemonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_pokemons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-pokemons.component.html */ "LCLT");
/* harmony import */ var _all_pokemons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-pokemons.component.scss */ "5TcM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/all-pokemon.service */ "09Fq");






let AllPokemonsComponent = class AllPokemonsComponent {
    constructor(allPokemon, router) {
        this.allPokemon = allPokemon;
        this.router = router;
    }
    ngOnInit() {
    }
    goToDetails(id) {
        this.router.navigate([`pokemon-details/${id}`]);
    }
};
AllPokemonsComponent.ctorParameters = () => [
    { type: _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_5__["AllPokemonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AllPokemonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-pokemons',
        template: _raw_loader_all_pokemons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_pokemons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllPokemonsComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





let AppComponent = class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.langSelect = ['en', 'fr'];
        translate.setDefaultLang('en');
    }
    selectedLang($event) {
        this.translate.use($event.target.value);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TLjL":
/*!********************************************!*\
  !*** ./src/app/shared/enums/types.enum.ts ***!
  \********************************************/
/*! exports provided: TypesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesEnum", function() { return TypesEnum; });
var TypesEnum;
(function (TypesEnum) {
    TypesEnum["fire"] = "fire";
    TypesEnum["grass"] = "grass";
    TypesEnum["water"] = "water";
    TypesEnum["electric"] = "electric";
    TypesEnum["flying"] = "flying";
    TypesEnum["rock"] = "rock";
    TypesEnum["ghost"] = "ghost";
    TypesEnum["darkness"] = "darkness";
    TypesEnum["fighting"] = "fighting";
    TypesEnum["steel"] = "steel";
    TypesEnum["dragon"] = "dragon";
    TypesEnum["bug"] = "bug";
    TypesEnum["normal"] = "normal";
    TypesEnum["poison"] = "poison";
    TypesEnum["ground"] = "ground";
    TypesEnum["fairy"] = "fairy";
    TypesEnum["psychic"] = "psychic";
    TypesEnum["ice"] = "ice";
})(TypesEnum || (TypesEnum = {}));


/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-header>\r\n    <ion-title>Pokedex</ion-title>\r\n    <select (change)=\"selectedLang($event)\">\r\n      <option *ngFor=\"let lang of langSelect\"\r\n              [value]=\"lang\"> {{ lang }}</option>\r\n    </select>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-router-outlet></ion-router-outlet>\r\n  </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLoaderFactory", function() { return httpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/all-pokemons/all-pokemons.component */ "Sm+d");











const httpLoaderFactory = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_10__["AllPokemonsComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            })
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "m7LA":
/*!********************************************!*\
  !*** ./src/app/shared/enums/color.enum.ts ***!
  \********************************************/
/*! exports provided: ColorEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorEnum", function() { return ColorEnum; });
var ColorEnum;
(function (ColorEnum) {
    ColorEnum["fireColor"] = "rgb(247, 82, 49)";
    ColorEnum["grassColor"] = "rgb(123, 206, 82)";
    ColorEnum["waterColor"] = "rgb(57, 156, 255)";
    ColorEnum["electricColor"] = "rgb(255, 198, 49)";
    ColorEnum["flyingColor"] = "rgb(168, 144, 240)";
    ColorEnum["rockColor"] = "rgb(189, 165, 90)";
    ColorEnum["ghostColor"] = "rgb(99, 99, 181)";
    ColorEnum["darknessColor"] = "rgb(115, 90, 74)";
    ColorEnum["fightingColor"] = "rgb(165, 82, 57)";
    ColorEnum["steelColor"] = "rgb(173, 165, 148)";
    ColorEnum["dragonColor"] = "rgb(136, 88, 246)";
    ColorEnum["bugColor"] = "rgb(173, 189, 33)";
    ColorEnum["normalColor"] = "rgb(173, 165, 148)";
    ColorEnum["fairyColor"] = "rgb(224, 154, 227)";
    ColorEnum["psychicColor"] = "rgb(255, 115, 165)";
    ColorEnum["groundColor"] = "rgb(214, 181, 90)";
    ColorEnum["poisonColor"] = "rgb(181, 90, 165)";
    ColorEnum["iceColor"] = "rgb(152, 216, 216)";
})(ColorEnum || (ColorEnum = {}));


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-pokemons/all-pokemons.component */ "Sm+d");




const routes = [
    {
        path: 'pokemon-details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | components-pokemon-details-pokemon-details-module */ "components-pokemon-details-pokemon-details-module").then(__webpack_require__.bind(null, /*! ./components/pokemon-details/pokemon-details.module */ "jL1i")).then(m => m.PokemonDetailsPageModule)
    },
    {
        path: '',
        component: _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_3__["AllPokemonsComponent"]
    },
    {
        path: '**',
        component: _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_3__["AllPokemonsComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map