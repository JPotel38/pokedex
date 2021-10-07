(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pokemon-details-pokemon-details-module"],{

/***/ "3gQs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pokemon-details/pokemon-details.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-toolbar>\r\n        <ion-title [innerHTML]=\"'NAMES.' + pokemon.name | translate\"></ion-title>\r\n      </ion-toolbar>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"previousPokemon()\" *ngIf=\"pokemonId > 1\">\r\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-img id=\"img\" (click)=\"playAudio()\" [alt]=\"pokemon.name\" [src]=\"pokemon.img\" style=\"cursor: pointer\"></ion-img>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-text [innerHTML]=\"'DESC.' + pokemon.name | translate\"></ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text>{{'WEIGHT' | translate}}: {{pokemon.weight}}</ion-text>\r\n          </ion-col>\r\n          <ion-col>{{'HEIGHT' | translate}}: {{pokemon.height}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text>{{'LEVEL' | translate}} :</ion-text>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-input (ionChange)=\"manageLevel($event)\" max=\"100\" min=\"1\" type=\"number\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row>\r\n            <ion-button (click)=\"nextPokemon()\"\r\n                        *ngIf=\"pokemon.evolutionLevel && level >= pokemon.evolutionLevel\">{{'EVOLVE' | translate}}\r\n            </ion-button>\r\n            <ion-button (click)=\"nextPokemon()\" *ngIf=\"pokemon.exchange\">{{'EXCHANGE' | translate}}</ion-button>\r\n            <div *ngFor=\"let stone of pokemon.stone\">\r\n              <ion-img (click)=\"useStone(stone)\" id=\"stone\" [src]='stone'></ion-img>\r\n            </div>\r\n          </ion-row>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-list>\r\n          <h1>{{'ATTACKS' | translate}}: </h1>\r\n<!--          <ion-item *ngFor=\"let attacks of pokemon.attacks\">-->\r\n<!--            <ion-label>-->\r\n<!--              {{attacks}}-->\r\n<!--            </ion-label>-->\r\n<!--          </ion-item>-->\r\n          <ion-text> Coming soon ! </ion-text>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"nextPokemon()\" *ngIf=\"pokemonId < 151\">\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"goBackToPokedex()\" size=\"large\">{{'HOME' | translate}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "bqcu":
/*!**********************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  width: 370px;\n  height: 300px;\n}\n\n#stone {\n  width: 34px;\n  height: 34px;\n}\n\n.shake {\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2tlbW9uLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnRUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGtDQUFBO0VBRUY7RUFDQTtJQUNFLGlDQUFBO0VBQ0Y7RUFFQTtJQUNFLGtDQUFBO0VBQUY7RUFHQTtJQUNFLGlDQUFBO0VBREY7QUFDRiIsImZpbGUiOiJwb2tlbW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XHJcbiAgd2lkdGg6IDM3MHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbiNzdG9uZSB7XHJcbiAgd2lkdGg6IDM0cHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcbi5zaGFrZSB7XHJcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoLjM2LC4wNywuMTksLjk3KSBib3RoO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDEwJSwgOTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUsIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAzMCUsIDUwJSwgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTRweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA0MCUsIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */");

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let PokemonDetailsPageModule = class PokemonDetailsPageModule {
};
PokemonDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pokemon_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PokemonDetailsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
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
/* harmony import */ var _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/all-pokemon.service */ "09Fq");






let PokemonDetailsPage = class PokemonDetailsPage {
    constructor(activatedRoute, allPokemonService, router) {
        this.activatedRoute = activatedRoute;
        this.allPokemonService = allPokemonService;
        this.router = router;
        this.pokemonId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    }
    ngOnInit() {
        this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId);
    }
    playAudio() {
        document.getElementById('img').classList.add('shake');
        const audio = new Audio();
        audio.src = this.pokemon.audio;
        audio.load();
        audio.play();
        setTimeout(() => {
            document.getElementById('img').classList.remove('shake');
        }, 1000);
    }
    goBackToPokedex() {
        this.router.navigate([`/`]);
    }
    manageLevel(e) {
        this.level = e.detail.value;
    }
    previousPokemon() {
        this.pokemonId--;
        this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
    }
    nextPokemon() {
        this.pokemonId++;
        this.router.navigate([`pokemon-details/${this.pokemonId.toString()}`]);
    }
    useStone(stone) {
        const evolution = this.pokemonId + this.pokemon.stone.indexOf(stone) + 1;
        this.router.navigate([`pokemon-details/${evolution.toString()}`]);
    }
};
PokemonDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_5__["AllPokemonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
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