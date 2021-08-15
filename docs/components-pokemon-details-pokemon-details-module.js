(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pokemon-details-pokemon-details-module"],{

/***/ "3gQs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pokemon-details/pokemon-details.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{pokemon.name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-img style=\"cursor: pointer\" [src]=\"pokemon.img\" (click)=\"playAudio()\"></ion-img>\r\n  <ion-text>{{pokemon.description}}</ion-text>\r\n</ion-content>\r\n");

/***/ }),

/***/ "bqcu":
/*!**********************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  width: 370px;\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2tlbW9uLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJwb2tlbW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgd2lkdGg6IDM3MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "jL1i":
/*!**********************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.module.ts ***!
  \**********************************************************************/
/*! exports provided: PokemonDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsPageModule", function() { return PokemonDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pokemon_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pokemon-details-routing.module */ "nbw8");
/* harmony import */ var _pokemon_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemon-details.page */ "xuiW");







let PokemonDetailsPageModule = class PokemonDetailsPageModule {
};
PokemonDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pokemon_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PokemonDetailsPageRoutingModule"]
        ],
        declarations: [_pokemon_details_page__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailsPage"]]
    })
], PokemonDetailsPageModule);



/***/ }),

/***/ "nbw8":
/*!******************************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PokemonDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsPageRoutingModule", function() { return PokemonDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pokemon_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon-details.page */ "xuiW");




const routes = [
    {
        path: '',
        component: _pokemon_details_page__WEBPACK_IMPORTED_MODULE_3__["PokemonDetailsPage"]
    }
];
let PokemonDetailsPageRoutingModule = class PokemonDetailsPageRoutingModule {
};
PokemonDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PokemonDetailsPageRoutingModule);



/***/ }),

/***/ "xuiW":
/*!********************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.page.ts ***!
  \********************************************************************/
/*! exports provided: PokemonDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsPage", function() { return PokemonDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pokemon_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pokemon-details.page.html */ "3gQs");
/* harmony import */ var _pokemon_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon-details.page.scss */ "bqcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_all_pokemons_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/all-pokemons.service */ "X0eG");






let PokemonDetailsPage = class PokemonDetailsPage {
    constructor(activatedRoute, allPokemonsService) {
        this.activatedRoute = activatedRoute;
        this.allPokemonsService = allPokemonsService;
        this.pokemonId = this.activatedRoute.snapshot.params.id;
    }
    ngOnInit() {
        this.pokemon = this.allPokemonsService.getDetailsPokemon(this.pokemonId);
    }
    playAudio() {
        const audio = new Audio();
        audio.src = this.pokemon.audio;
        audio.load();
        audio.play();
    }
};
PokemonDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_all_pokemons_service__WEBPACK_IMPORTED_MODULE_5__["AllPokemonsService"] }
];
PokemonDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pokemon-details',
        template: _raw_loader_pokemon_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pokemon_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PokemonDetailsPage);



/***/ })

}]);
//# sourceMappingURL=components-pokemon-details-pokemon-details-module.js.map