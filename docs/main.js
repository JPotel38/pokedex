(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/all-pokemons/all-pokemons.component */ 4864);
/* harmony import */ var _shared_resolver_pokemon_details_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/resolver/pokemon-details-resolver.service */ 257);
/* harmony import */ var _shared_resolver_all_pokemon_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/resolver/all-pokemon-resolver.service */ 9624);
/* harmony import */ var _components_login_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login-page.component */ 8162);
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/account/account.component */ 5109);
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin/signin.component */ 7484);
/* harmony import */ var _components_pokemon_details_pokemon_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pokemon-details/pokemon-details.page */ 8741);










const routes = [
    {
        path: 'pokemon-details/:id',
        component: _components_pokemon_details_pokemon_details_page__WEBPACK_IMPORTED_MODULE_6__.PokemonDetailsPage,
        resolve: {
            pokemon: _shared_resolver_pokemon_details_resolver_service__WEBPACK_IMPORTED_MODULE_1__.PokemonDetailsResolver
        }
    },
    {
        path: 'login',
        component: _components_login_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPage
    },
    {
        path: 'signin',
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__.SigninComponent
    },
    {
        path: 'account',
        component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_4__.AccountComponent
    },
    {
        path: '',
        component: _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_0__.AllPokemonsComponent,
        resolve: {
            allPokemon: _shared_resolver_all_pokemon_resolver_service__WEBPACK_IMPORTED_MODULE_2__.AllPokemonResolver
        }
    },
    {
        path: '**',
        component: _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_0__.AllPokemonsComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_9__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/trainer.service */ 1371);







let AppComponent = class AppComponent {
    constructor(translate, router, trainerService) {
        this.translate = translate;
        this.router = router;
        this.trainerService = trainerService;
        this.langSelect = ['en', 'fr'];
        this.toggle = document.querySelector('#themeToggle');
        translate.setDefaultLang('en');
        router.events.subscribe(() => this.currentUrl = router.url);
    }
    ngOnInit() {
        this.trainerService.trainer.subscribe(user => this.user = user);
    }
    selectedLang($event) {
        this.translate.use($event.target.value);
    }
    goBackToPokedex() {
        this.router.navigate([`/`]);
    }
    checkToggle(e) {
        const isChecked = e.detail.checked;
        document.body.classList.toggle('dark', isChecked);
    }
    goLogin() {
        this.router.navigate([`login`]);
    }
    goAccount() {
        this.router.navigate([`account`]);
    }
    logOut() {
        this.trainerService.trainer.next(null);
    }
    goSignin() {
        this.router.navigate([`signin`]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__.TrainerService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "httpLoaderFactory": () => (/* binding */ httpLoaderFactory)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/all-pokemons/all-pokemons.component */ 4864);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_login_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login-page.component */ 8162);
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signin/signin.component */ 7484);
/* harmony import */ var _components_pokemon_details_pokemon_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pokemon-details/pokemon-details.page */ 8741);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 2302);
















const httpLoaderFactory = (http) => new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_pokemon_details_pokemon_details_page__WEBPACK_IMPORTED_MODULE_5__.PokemonDetailsPage, _components_all_pokemons_all_pokemons_component__WEBPACK_IMPORTED_MODULE_2__.AllPokemonsComponent, _components_login_login_page_component__WEBPACK_IMPORTED_MODULE_3__.LoginPage, _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__.SigninComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
                }
            }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 5109:
/*!*********************************************************!*\
  !*** ./src/app/components/account/account.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component.html?ngResource */ 1610);
/* harmony import */ var _account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component.scss?ngResource */ 1161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() { }
};
AccountComponent.ctorParameters = () => [];
AccountComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account',
        template: _account_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountComponent);



/***/ }),

/***/ 4864:
/*!*******************************************************************!*\
  !*** ./src/app/components/all-pokemons/all-pokemons.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPokemonsComponent": () => (/* binding */ AllPokemonsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _all_pokemons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-pokemons.component.html?ngResource */ 3665);
/* harmony import */ var _all_pokemons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-pokemons.component.scss?ngResource */ 6639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/all-pokemon.service */ 939);






let AllPokemonsComponent = class AllPokemonsComponent {
    constructor(allPokemon, router) {
        this.allPokemon = allPokemon;
        this.router = router;
        this.p = 1;
    }
    ngOnInit() {
    }
    goToDetails(id) {
        this.router.navigate([`pokemon-details/${id}`]);
    }
};
AllPokemonsComponent.ctorParameters = () => [
    { type: _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_2__.AllPokemonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AllPokemonsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-all-pokemons',
        template: _all_pokemons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_all_pokemons_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AllPokemonsComponent);



/***/ }),

/***/ 8162:
/*!**********************************************************!*\
  !*** ./src/app/components/login/login-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page.component.html?ngResource */ 1945);
/* harmony import */ var _login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-page.component.scss?ngResource */ 8155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/trainer.service */ 1371);
var LoginPage_1;







let LoginPage = LoginPage_1 = class LoginPage {
    constructor(router, trainerService, fb) {
        this.router = router;
        this.trainerService = trainerService;
        this.usernameCtrl = fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.passwordCtrl = fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.passwordConfirmCtrl = fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.passwordForm = fb.group({ password: this.passwordCtrl, passwordConfirm: this.passwordConfirmCtrl }, { validators: LoginPage_1.passwordMatch });
        this.userForm = fb.group({
            name: this.usernameCtrl,
            passwordForm: this.passwordForm
        });
    }
    static passwordMatch(group) {
        const password = group.get('password').value;
        const confirm = group.get('passwordConfirm').value;
        return password === confirm ? null : { matchingError: true };
    }
    ngOnInit() {
    }
    validate() {
        this.user = {
            login: this.userForm.get('name').value,
            password: this.passwordForm.get('password').value
        };
        const userArrayFromStorage = JSON.parse(localStorage.getItem('userArray'));
        if (this.success(userArrayFromStorage)) {
            this.trainerService.trainer.next(this.user);
            this.router.navigate([`/`]);
        }
        else {
            alert('Unknown user');
        }
    }
    success(userArray) {
        return userArray.find(user => JSON.stringify(user) === JSON.stringify(this.user));
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__.TrainerService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder }
];
LoginPage = LoginPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account',
        template: _login_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8741:
/*!********************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonDetailsPage": () => (/* binding */ PokemonDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pokemon_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon-details.page.html?ngResource */ 8632);
/* harmony import */ var _pokemon_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon-details.page.scss?ngResource */ 1936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/all-pokemon.service */ 939);






let PokemonDetailsPage = class PokemonDetailsPage {
    constructor(activatedRoute, allPokemonService, router) {
        this.activatedRoute = activatedRoute;
        this.allPokemonService = allPokemonService;
        this.router = router;
        this.pokemonId = parseInt(this.activatedRoute.snapshot.params.id, 10);
        this.pokemon = this.allPokemonService.getDetailsPokemon(this.pokemonId.toString());
    }
    ngOnInit() {
    }
    playAudio() {
        document.getElementById('img').classList.add('shake');
        this.shaking();
        const audio = new Audio();
        audio.src = this.pokemon.audio;
        audio.load();
        audio.play();
    }
    shaking() {
        return new Promise(_ => {
            setTimeout(() => {
                document.getElementById('img').classList.remove('shake');
            }, 1000);
        });
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _shared_services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_2__.AllPokemonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PokemonDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pokemon-details',
        template: _pokemon_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pokemon_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PokemonDetailsPage);



/***/ }),

/***/ 7484:
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component.html?ngResource */ 4147);
/* harmony import */ var _signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.component.scss?ngResource */ 4521);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/trainer.service */ 1371);
var SigninComponent_1;







let SigninComponent = SigninComponent_1 = class SigninComponent {
    constructor(router, trainerService, fb) {
        this.router = router;
        this.trainerService = trainerService;
        this.userArray = [];
        this.usernameCtrl = fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.passwordCtrl = fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.passwordConfirmCtrl = fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.passwordForm = fb.group({ password: this.passwordCtrl, passwordConfirm: this.passwordConfirmCtrl }, { validators: SigninComponent_1.passwordMatch });
        this.userForm = fb.group({
            name: this.usernameCtrl,
            passwordForm: this.passwordForm,
            pokemonTeam: fb.control([])
        });
    }
    static passwordMatch(group) {
        const password = group.get('password').value;
        const confirm = group.get('passwordConfirm').value;
        return password === confirm ? null : { matchingError: true };
    }
    ngOnInit() {
    }
    validate() {
        this.user = {
            login: this.userForm.get('name').value,
            password: this.userForm.get('password').value
        };
        this.storeUser(this.user);
        this.trainerService.trainer.next(this.user);
        this.router.navigate([`/`]);
    }
    storeUser(user) {
        localStorage.getItem('userArray');
        this.userArray.push(user);
        localStorage.setItem('userArray', JSON.stringify(this.userArray));
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_services_trainer_service__WEBPACK_IMPORTED_MODULE_2__.TrainerService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder }
];
SigninComponent = SigninComponent_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signin',
        template: _signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SigninComponent);



/***/ }),

/***/ 4295:
/*!********************************************!*\
  !*** ./src/app/shared/enums/color.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorEnum": () => (/* binding */ ColorEnum)
/* harmony export */ });
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

/***/ 7020:
/*!********************************************!*\
  !*** ./src/app/shared/enums/stone.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoneEnum": () => (/* binding */ StoneEnum)
/* harmony export */ });
var StoneEnum;
(function (StoneEnum) {
    StoneEnum["fire"] = "./assets/icons/Fire_Stone.png";
    StoneEnum["water"] = "./assets/icons/Water_Stone.png";
    StoneEnum["thunder"] = "./assets/icons/Thunder_Stone.png";
    StoneEnum["moon"] = "./assets/icons/Moon_Stone.png";
    StoneEnum["leaf"] = "./assets/icons/Leaf_Stone.png";
})(StoneEnum || (StoneEnum = {}));


/***/ }),

/***/ 554:
/*!********************************************!*\
  !*** ./src/app/shared/enums/types.enum.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypesEnum": () => (/* binding */ TypesEnum)
/* harmony export */ });
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

/***/ 9624:
/*!*****************************************************************!*\
  !*** ./src/app/shared/resolver/all-pokemon-resolver.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPokemonResolver": () => (/* binding */ AllPokemonResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/all-pokemon.service */ 939);



let AllPokemonResolver = class AllPokemonResolver {
    constructor(allPokemon) {
        this.allPokemon = allPokemon;
    }
    resolve() {
        return this.allPokemon.getAllPokemons();
    }
};
AllPokemonResolver.ctorParameters = () => [
    { type: _services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_0__.AllPokemonService }
];
AllPokemonResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AllPokemonResolver);



/***/ }),

/***/ 257:
/*!*********************************************************************!*\
  !*** ./src/app/shared/resolver/pokemon-details-resolver.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokemonDetailsResolver": () => (/* binding */ PokemonDetailsResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/all-pokemon.service */ 939);



let PokemonDetailsResolver = class PokemonDetailsResolver {
    constructor(allPokemon) {
        this.allPokemon = allPokemon;
    }
    resolve(route, state) {
        return this.allPokemon.getDetailsPokemon(route.paramMap.get('id'));
    }
};
PokemonDetailsResolver.ctorParameters = () => [
    { type: _services_all_pokemon_service__WEBPACK_IMPORTED_MODULE_0__.AllPokemonService }
];
PokemonDetailsResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], PokemonDetailsResolver);



/***/ }),

/***/ 939:
/*!********************************************************!*\
  !*** ./src/app/shared/services/all-pokemon.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPokemonService": () => (/* binding */ AllPokemonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/types.enum */ 554);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/color.enum */ 4295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/stone.enum */ 7020);







let AllPokemonService = class AllPokemonService {
    constructor(http) {
        this.http = http;
        this.pokemonArray = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([
            {
                id: 1,
                name: 'Bulbasaur',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass],
                height: '0.7 m',
                weight: '6.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor],
                img: './assets/images/Bulbasaur.png',
                audio: './assets/audio/Bulbasaur.ogg',
                description: 'It can go for days without eating a single morsel. In the bulb on its back, it stores energy. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 2,
                name: 'Ivysaur',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass],
                height: '1.0 m',
                weight: '13 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor],
                img: './assets/images/Ivysaur.png',
                audio: './assets/audio/Ivysaur.ogg',
                description: 'The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom. ',
                attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam']
            },
            {
                id: 3,
                name: 'Venusaur',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass],
                height: '2.0 m',
                weight: '100.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor],
                img: './assets/images/Venusaur.png',
                audio: './assets/audio/Venusaur.ogg',
                description: 'The flower on its back catches the sun\'s rays. The sunlight is then absorbed and used for energy. ',
                attacks: [' Vine Whip', 'Razor Leaf', ' Seed Bomb', 'Solar Beam']
            },
            {
                id: 4,
                name: 'Charmander',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '0.6 m',
                weight: '8.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Charmander.png',
                audio: './assets/audio/Charmander.ogg',
                description: 'The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 5,
                name: 'Charmeleon',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.1 m',
                weight: '19.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Charmeleon.png',
                audio: './assets/audio/Charmeleon.ogg',
                description: 'Tough fights could excite this Pokémon. When excited, it may blow out bluish-white flames. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 6,
                name: 'Charizard',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.7 m',
                weight: '90.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Charizard.png',
                audio: './assets/audio/Charizard.ogg',
                description: 'When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 7,
                name: 'Squirtle',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.5 m',
                weight: '9.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Squirtle.png',
                audio: './assets/audio/Squirtle.ogg',
                description: 'Shoots water at prey while in the water. Withdraws into its shell when in danger. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 8,
                name: 'Wartortle',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.0 m',
                weight: '22.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Wartortle.png',
                audio: './assets/audio/Wartortle.ogg',
                description: 'When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 9,
                name: 'Blastoise',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.6m',
                weight: '85.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Blastoise.png',
                audio: './assets/audio/Blastoise.ogg',
                description: 'Once it takes aim at its enemy, it blasts out water with even more force than a fire hose. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 10,
                name: 'Caterpie',
                evolutionLevel: 7,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '0.3 m',
                weight: '2.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Caterpie.png',
                audio: './assets/audio/Caterpie.ogg',
                description: 'If you touch the feeler on top of its head, it will release a horrible stink to protect itself. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 11,
                name: 'Metapod',
                evolutionLevel: 10,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '0.7 m',
                weight: '9.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Metapod.png',
                audio: './assets/audio/Metapod.ogg',
                description: 'Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 12,
                name: 'Butterfree',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '1.1 m',
                weight: '32.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Butterfree.png',
                audio: './assets/audio/Butterfree.ogg',
                description: 'Its wings, covered with poisonous powders, repel water. This allows it to fly in the rain. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 13,
                name: 'Weedle',
                evolutionLevel: 7,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '0.3 m',
                weight: '3.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Weedle.png',
                audio: './assets/audio/Weedle.ogg',
                description: 'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 14,
                name: 'Kakuna',
                evolutionLevel: 10,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '0.6 m',
                weight: '10.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Kakuna.png',
                audio: './assets/audio/Kakuna.ogg',
                description: 'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 15,
                name: 'Beedrill',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '1.0 m',
                weight: '29.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Beedrill.png',
                audio: './assets/audio/Beedrill.ogg',
                description: 'It has 3 poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 16,
                name: 'Pidgey',
                evolutionLevel: 18,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '0.3 m',
                weight: '1.8 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Pidgey.png',
                audio: './assets/audio/Pidgey.ogg',
                description: 'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 17,
                name: 'Pidgeotto',
                evolutionLevel: 36,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.1 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Pidgeotto.png',
                audio: './assets/audio/Pidgeotto.ogg',
                description: 'This Pokémon is full of vitality. It constantly flies around its large territory in search of prey. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 18,
                name: 'Pidgeot',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.5 m',
                weight: '39.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Pidgeot.png',
                audio: './assets/audio/Pidgeot.ogg',
                description: 'This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 19,
                name: 'Rattata',
                evolutionLevel: 20,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '0.3 m',
                weight: '3.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Rattata.png',
                audio: './assets/audio/Rattata.ogg',
                description: 'Will chew on anything with its fangs. If you see one, it is certain that 40 more live in the area. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 20,
                name: 'Raticate',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '0.7 m',
                weight: '18.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Raticate.png',
                audio: './assets/audio/Raticate.ogg',
                description: 'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 21,
                name: 'Spearow',
                evolutionLevel: 20,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '0.3 m',
                weight: '2.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Spearow.png',
                audio: './assets/audio/Spearow.ogg',
                description: 'Inept at flying high. However, it can fly around very fast to protect its territory. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 22,
                name: 'Fearow',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.2 m',
                weight: '38.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Fearow.png',
                audio: './assets/audio/Fearow.ogg',
                description: 'A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 23,
                name: 'Ekans',
                evolutionLevel: 22,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '2.0 m',
                weight: '6.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Ekans.png',
                audio: './assets/audio/Ekans.ogg',
                description: 'The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 24,
                name: 'Arbok',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '3.5 m',
                weight: '65.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Arbok.png',
                audio: './assets/audio/Arbok.ogg',
                description: 'The frightening patterns on its belly have been studied. Six variations have been confirmed. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 25,
                name: 'Pikachu',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.thunder],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric],
                height: '0.4 m',
                weight: '6.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor],
                img: './assets/images/Pikachu.png',
                audio: './assets/audio/Pikachu.ogg',
                description: 'It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 26,
                name: 'Raichu',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric],
                height: '0.8 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor],
                img: './assets/images/Raichu.png',
                audio: './assets/audio/Raichu.ogg',
                description: 'When electricity builds up inside its body, it becomes feisty. It also glows in the dark. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 27,
                name: 'Sandshrew',
                evolutionLevel: 22,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '0.6 m',
                weight: '12.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Sandshrew.png',
                audio: './assets/audio/Sandshrew.ogg',
                description: 'Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 28,
                name: 'Sandslash',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '1.0 m',
                weight: '29.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Sandslash.png',
                audio: './assets/audio/Sandslash.ogg',
                description: 'It is skilled at slashing enemies with its claws. If broken, they start to grow back in a day. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 29,
                name: 'Nidoran♀',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.4 m',
                weight: '7.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Nidoran♀.png',
                audio: './assets/audio/Nidoran.ogg',
                description: 'A mild-mannered Pokémon that does not like to fight. Beware, its small horns secrete venom. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 30,
                name: 'Nidorina',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.7 m',
                weight: '6.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Nidorina.png',
                audio: './assets/audio/Nidorina.ogg',
                description: 'When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 31,
                name: 'Nidoqueen',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '1.3 m',
                weight: '60.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Nidoqueen.png',
                audio: './assets/audio/Nidoqueen.ogg',
                description: 'Tough scales cover the sturdy body of this Pokémon. It appears that the scales grow in cycles. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 32,
                name: 'Nidoran♂',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.5 m',
                weight: '9.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Nidoran♂.png',
                audio: './assets/audio/Nidoran.ogg',
                description: 'Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 33,
                name: 'Nidorino',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.9 m',
                weight: '19.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Nidorino.png',
                audio: './assets/audio/Nidorino.ogg',
                description: 'Its horns contain venom. If they are stabbed into an enemy, the impact makes the poison leak out. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 34,
                name: 'Nidoking',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '1.4 m',
                weight: '62.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Nidoking.png',
                audio: './assets/audio/Nidoking.ogg',
                description: 'Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 35,
                name: 'Clefairy',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fairy],
                height: '0.6 m',
                weight: '7.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fairyColor],
                img: './assets/images/Clefairy.png',
                audio: './assets/audio/Clefairy.ogg',
                description: 'Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 36,
                name: 'Clefable',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fairy],
                height: '1.3 m',
                weight: '40.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fairyColor],
                img: './assets/images/Clefable.png',
                audio: './assets/audio/Clefable.ogg',
                description: 'They appear to be very protective of their own world. It is a kind of fairy, rarely seen by people. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 37,
                name: 'Vulpix',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.fire],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '0.6 m',
                weight: '9.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Vulpix.png',
                audio: './assets/audio/Vulpix.ogg',
                description: 'Both its fur and its tails are beautiful. As it grows, the tails split and form more tails. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 38,
                name: 'Ninetales',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.1 m',
                weight: '19.9 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Ninetales.png',
                audio: './assets/audio/Ninetales.ogg',
                description: 'According to an enduring legend, 9 noble saints were united and reincarnated as this Pokémon. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 39,
                name: 'Jigglypuff',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.moon],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fairy],
                height: '0.5 m',
                weight: '5.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fairyColor],
                img: './assets/images/Jigglypuff.png',
                audio: './assets/audio/Jigglypuff.ogg',
                description: 'Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 40,
                name: 'Wigglytuff',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fairy],
                height: '1.0 m',
                weight: '12.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fairyColor],
                img: './assets/images/Wigglytuff.png',
                audio: './assets/audio/Wigglytuff.ogg',
                description: 'Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 41,
                name: 'Zubat',
                evolutionLevel: 22,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '0.8 m',
                weight: '7.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Zubat.png',
                audio: './assets/audio/Zubat.ogg',
                description: 'Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 42,
                name: 'Golbat',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.6 m',
                weight: '55.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Golbat.png',
                audio: './assets/audio/Golbat.ogg',
                description: 'It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 43,
                name: 'Oddish',
                evolutionLevel: 21,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.5 m',
                weight: '5.4 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Oddish.png',
                audio: './assets/audio/Oddish.ogg',
                description: 'It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 44,
                name: 'Gloom',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.leaf],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.8 m',
                weight: '8.6 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Gloom.png',
                audio: './assets/audio/Gloom.ogg',
                description: 'Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 45,
                name: 'Vileplume',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.2 m',
                weight: '18.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Vileplume.png',
                audio: './assets/audio/Vileplume.ogg',
                description: 'Flaps its broad flower petals to scatter its poisonous pollen. The flapping sound is very loud. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 46,
                name: 'Paras',
                evolutionLevel: 24,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass],
                height: '0.3 m',
                weight: '5.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor],
                img: './assets/images/Paras.png',
                audio: './assets/audio/Paras.ogg',
                description: 'Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 47,
                name: 'Parasect',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass],
                height: '1.0 m',
                weight: '29.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor],
                img: './assets/images/Parasect.png',
                audio: './assets/audio/Parasect.ogg',
                description: 'The bug host is drained of energy by the mushrooms on its back. They appear to do all the thinking. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 48,
                name: 'Venonat',
                evolutionLevel: 31,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.0 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Venonat.png',
                audio: './assets/audio/Venonat.ogg',
                description: 'Its large eyes act as radars. In a bright place, you can see that they are clusters of many tiny eyes. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 49,
                name: 'Venomoth',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.5 m',
                weight: '12.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Venomoth.png',
                audio: './assets/audio/Venomoth.ogg',
                description: 'The powdery scales on its wings are hard to remove. They also contain poison that leaks out on contact. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 50,
                name: 'Diglett',
                evolutionLevel: 26,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '0.2 m',
                weight: '0.8 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Diglett.png',
                audio: './assets/audio/Diglett.ogg',
                description: 'It prefers dark places. It spends most of its time underground, though it may pop up in caves. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 51,
                name: 'Dugtrio',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '0.7 m',
                weight: '33.3 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Dugtrio.png',
                audio: './assets/audio/Dugtrio.ogg',
                description: 'A team of triplets that can burrow over 60 MPH. Due to this, some people think it\'s an earthquake. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 52,
                name: 'Meowth',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '0.4 m',
                weight: '4.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Meowth.png',
                audio: './assets/audio/Meowth.ogg',
                description: 'Appears to be more active at night. It loves round and shiny things. It can\'t stop from picking them up. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 53,
                name: 'Persian',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '1.0 m',
                weight: '32.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Persian.png',
                audio: './assets/audio/Persian.ogg',
                description: 'The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 54,
                name: 'Psyduck',
                evolutionLevel: 33,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.8 m',
                weight: '19.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Psyduck.png',
                audio: './assets/audio/Psyduck.ogg',
                description: 'Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 55,
                name: 'Golduck',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.7 m',
                weight: '76.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Golduck.png',
                audio: './assets/audio/Golduck.ogg',
                description: 'Its slim and long limbs end in broad flippers. They are used for swimming gracefully in lakes. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 56,
                name: 'Mankey',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '0.5 m',
                weight: '28.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Mankey.png',
                audio: './assets/audio/Mankey.ogg',
                description: 'An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 57,
                name: 'Primeape',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '1.0 m',
                weight: '32.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Primeape.png',
                audio: './assets/audio/Primeape.ogg',
                description: 'It stops being angry only when nobody else is around. To view this moment is very difficult. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 58,
                name: 'Growlithe',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.fire],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '0.7 m',
                weight: '19.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Growlithe.png',
                audio: './assets/audio/Growlithe.ogg',
                description: 'A Pokémon with a friendly nature. However, it will bark fiercely at anything invading its territory. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 59,
                name: 'Arcanine',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.9 m',
                weight: '155.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Arcanine.png',
                audio: './assets/audio/Arcanine.ogg',
                description: 'A legendary Pokémon in China. Many people are charmed by its grace and beauty while running. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 60,
                name: 'Poliwag',
                evolutionLevel: 25,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.6 m',
                weight: '12.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Poliwag.png',
                audio: './assets/audio/Poliwag.ogg',
                description: 'The direction of the spiral on the belly differs by area. It is more adept at swimming than walking. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 61,
                name: 'Poliwhirl',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.water],
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.0 m',
                weight: '20.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Poliwhirl.png',
                audio: './assets/audio/Poliwhirl.ogg',
                description: 'Under attack, it uses its belly spiral to put the foe to sleep. It then makes its escape. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 62,
                name: 'Poliwrath',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '1.3 m',
                weight: '54.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Poliwrath.png',
                audio: './assets/audio/Poliwrath.ogg',
                description: 'Swims powerfully using all the muscles in its body. It can even overtake champion swimmers. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 63,
                name: 'Abra',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '0.9 m',
                weight: '19.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Abra.png',
                audio: './assets/audio/Abra.ogg',
                description: 'Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 64,
                name: 'Kadabra',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.3 m',
                weight: '56.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Kadabra.png',
                audio: './assets/audio/Kadabra.ogg',
                description: 'Many odd things happen if this Pokémon is close by. For example, it makes clocks run backwards. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 65,
                name: 'Alakazam',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.5 m',
                weight: '48.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Alakazam.png',
                audio: './assets/audio/Alakazam.ogg',
                description: 'A Pokémon that can memorize anything. It never forgets what it learns—that\'s why this Pokémon is smart. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 66,
                name: 'Machop',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '0.8 m',
                weight: '19.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Machop.png',
                audio: './assets/audio/Machop.ogg',
                description: 'Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 67,
                name: 'Machoke',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '1.5 m',
                weight: '70.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Machoke.png',
                audio: './assets/audio/Machoke.ogg',
                description: 'The belt around its waist holds back its energy. Without it, this Pokémon would be unstoppable. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 68,
                name: 'Machamp',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '1.6 m',
                weight: '130.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Machamp.png',
                audio: './assets/audio/Machamp.ogg',
                description: 'One arm alone can move mountains. Using all four arms, this Pokémon fires off awesome punches. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 69,
                name: 'Bellsprout',
                evolutionLevel: 21,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.7 m',
                weight: '4.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Bellsprout.png',
                audio: './assets/audio/Bellsprout.ogg',
                description: 'Prefers hot and humid places. It ensnares tiny insects with its vines and devours them. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 70,
                name: 'Weepinbell',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.leaf],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.0 m',
                weight: '6.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Weepinbell.png',
                audio: './assets/audio/Weepinbell.ogg',
                description: 'When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 71,
                name: 'Victreebel',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.7 m',
                weight: '15.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Victreebel.png',
                audio: './assets/audio/Victreebel.ogg',
                description: 'Lures prey with the sweet aroma of honey. Swallowed whole, the prey is melted in a day, bones and all. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 72,
                name: 'Tentacool',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.9 m',
                weight: '45.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Tentacool.png',
                audio: './assets/audio/Tentacool.ogg',
                description: 'It can sometimes be found all dry and shriveled up on a beach. Toss it back into the sea to revive it. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 73,
                name: 'Tentacruel',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.6 m',
                weight: '55.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Tentacruel.png',
                audio: './assets/audio/Tentacruel.ogg',
                description: 'Its 80 tentacles can stretch and contract freely. They wrap around prey and weaken it with poison. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 74,
                name: 'Geodude',
                evolutionLevel: 25,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '0.4 m',
                weight: '20.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Geodude.png',
                audio: './assets/audio/Geodude.ogg',
                description: 'Commonly found near mountain trails, etc. If you step on one by accident, it gets angry. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 75,
                name: 'Graveler',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '1.0 m',
                weight: '105.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Graveler.png',
                audio: './assets/audio/Graveler.ogg',
                description: 'Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 76,
                name: 'Golem',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '1.4 m',
                weight: '300.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Golem.png',
                audio: './assets/audio/Golem.ogg',
                description: 'Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it\'s exposed to air. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 77,
                name: 'Ponyta',
                evolutionLevel: 40,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.0 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Ponyta.png',
                audio: './assets/audio/Ponyta.ogg',
                description: 'Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 78,
                name: 'Rapidash',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.7 m',
                weight: '95.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Rapidash.png',
                audio: './assets/audio/Rapidash.ogg',
                description: 'Just loves to run. If it sees something faster than itself, it will give chase at top speed. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 79,
                name: 'Slowpoke',
                evolutionLevel: 37,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.2 m',
                weight: '36.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Slowpoke.png',
                audio: './assets/audio/Slowpoke.ogg',
                description: 'Incredibly slow and sluggish. It is quite content to loll about without worrying about the time. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 80,
                name: 'Slowbro',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.6 m',
                weight: '78.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Slowbro.png',
                audio: './assets/audio/Slowbro.ogg',
                description: 'Lives lazily by the sea. If the Shellder on its tail comes off, it becomes a Slowpoke again. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 81,
                name: 'Magnemite',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.steel],
                height: '0.3 m',
                weight: '6.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.steelColor],
                img: './assets/images/Magnemite.png',
                audio: './assets/audio/Magnemite.ogg',
                description: 'It is born with the ability to defy gravity. It floats in air on powerful electromagnetic waves. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 82,
                name: 'Magneton',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.steel],
                height: '1.0 m',
                weight: '60.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.steelColor],
                img: './assets/images/Magneton.png',
                audio: './assets/audio/Magneton.ogg',
                description: 'Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 83,
                name: 'Farfetch\'d',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '0.8 m',
                weight: '15.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Farfetch\'d.png',
                audio: './assets/audio/Farfetch\'d.ogg',
                description: 'Lives where reedy plants grow. They are rarely seen, so it\'s thought their numbers are decreasing. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 84,
                name: 'Doduo',
                evolutionLevel: 31,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.4 m',
                weight: '39.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Doduo.png',
                audio: './assets/audio/Doduov.ogg',
                description: 'Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 85,
                name: 'Dodrio',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.8 m',
                weight: '85.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Dodrio.png',
                audio: './assets/audio/Dodrio.ogg',
                description: 'One of Doduo\'s 2 heads splits to form a unique species. It runs close to 40 MPH in prairies. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 86,
                name: 'Seel',
                evolutionLevel: 34,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.1 m',
                weight: '90.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Seel.png',
                audio: './assets/audio/Seel.ogg',
                description: 'Loves freezing cold conditions. Relishes swimming in a frigid climate of around 14F degrees. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 87,
                name: 'Dewgong',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ice],
                height: '1.7 m',
                weight: '120.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.iceColor],
                img: './assets/images/Dewgong.png',
                audio: './assets/audio/Dewgong.ogg',
                description: 'Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 88,
                name: 'Grimer',
                evolutionLevel: 38,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.9 m',
                weight: '30.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Grimer.png',
                audio: './assets/audio/Grimer.ogg',
                description: 'Made of hardened sludge. It smells too putrid to touch. Even weeds won\'t grow in its path. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 89,
                name: 'Muk',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.2 m',
                weight: '30.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Muk.png',
                audio: './assets/audio/Muk.ogg',
                description: 'Smells so awful, it can cause fainting. Through degeneration, it lost its sense of smell. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 90,
                name: 'Shellder',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.water],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.3 m',
                weight: '4.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Shellder.png',
                audio: './assets/audio/Shellder.ogg',
                description: 'The shell can withstand any attack. However, when it is open, the tender body is exposed. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 91,
                name: 'Cloyster',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ice],
                height: '1.5 m',
                weight: '132.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.iceColor],
                img: './assets/images/Cloyster.png',
                audio: './assets/audio/Cloyster.ogg',
                description: 'For protection, it uses its harder-than-diamonds shell. It also shoots spikes from the shell. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 92,
                name: 'Gastly',
                evolutionLevel: 25,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ghost, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.3 m',
                weight: '0.1 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.ghostColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Gastly.png',
                audio: './assets/audio/Gastly.ogg',
                description: 'Said to appear in decrepit, deserted buildings. It has no real shape as it appears to be made of a gas. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 93,
                name: 'Haunter',
                exchange: true,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ghost, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.6 m',
                weight: '0.1 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.ghostColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Haunter.png',
                audio: './assets/audio/Haunter.ogg',
                description: 'By licking, it saps the victim\'s life. It causes shaking that won\'t stop until the victim\'s demise. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 94,
                name: 'Gengar',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ghost, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.5 m',
                weight: '40.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.ghostColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Gengar.png',
                audio: './assets/audio/Gengar.ogg',
                description: 'A Gengar is close by if you feel a sudden chill. It may be trying to lay a curse on you. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 95,
                name: 'Onix',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock],
                height: '8.8 m',
                weight: '210.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor],
                img: './assets/images/Onix.png',
                audio: './assets/audio/Onix.ogg',
                description: 'Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 96,
                name: 'Drowzee',
                evolutionLevel: 26,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.0 m',
                weight: '32.4 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Drowzee.png',
                audio: './assets/audio/Drowzee.ogg',
                description: 'If you sleep by it all the time, it will sometimes show you dreams it has eaten in the past. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 97,
                name: 'Hypno',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.6 m',
                weight: '75.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Hypno.png',
                audio: './assets/audio/Hypno.ogg',
                description: 'Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 98,
                name: 'Krabby',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.4 m',
                weight: '6.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Krabby.png',
                audio: './assets/audio/Krabby.ogg',
                description: 'Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 99,
                name: 'Kingler',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.3 m',
                weight: '60.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Kingler.png',
                audio: './assets/audio/Kingler.ogg',
                description: 'One claw grew massively and as hard as steel. It has 10,000-HP strength. However, it is too heavy. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 100,
                name: 'Voltorb',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric],
                height: '0.5 m',
                weight: '10.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor],
                img: './assets/images/Voltorb.png',
                audio: './assets/audio/Voltorb.ogg',
                description: 'It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 101,
                name: 'Electrode',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric],
                height: '1.2 m',
                weight: '66.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor],
                img: './assets/images/Electrode.png',
                audio: './assets/audio/Electrode.ogg',
                description: 'Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 102,
                name: 'Exeggcute',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.leaf],
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '0.4 m',
                weight: '2.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Exeggcute.png',
                audio: './assets/audio/Exeggcute.ogg',
                description: 'The heads attract each other and spin around. There must be 6 heads for it to maintain balance. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 103,
                name: 'Exeggutor',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '2.0 m',
                weight: '120.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Exeggutor.png',
                audio: './assets/audio/Exeggutor.ogg',
                description: 'Its cries are very noisy. This is because each of the three heads thinks about whatever it likes. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 104,
                name: 'Cubone',
                evolutionLevel: 28,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '0.4 m',
                weight: '6.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Cubone.png',
                audio: './assets/audio/Cubone.ogg',
                description: 'Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 105,
                name: 'Marowak',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground],
                height: '1.0 m',
                weight: '45.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor],
                img: './assets/images/Marowak.png',
                audio: './assets/audio/Marowak.ogg',
                description: 'Small and weak, this Pokémon is adept with its Bone Club. It has grown more vicious over the ages. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 106,
                name: 'Hitmonlee',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '1.5 m',
                weight: '49.8 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Hitmonlee.png',
                audio: './assets/audio/Hitmonlee.ogg',
                description: 'When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 107,
                name: 'Hitmonchan',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fighting],
                height: '1.4 m',
                weight: '50.2 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fightingColor],
                img: './assets/images/Hitmonchan.png',
                audio: './assets/audio/Hitmonchan.ogg',
                description: 'Punches in corkscrew fashion. It can punch its way through a concrete wall in the same way as a drill. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 108,
                name: 'Lickitung',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '1.2 m',
                weight: '65.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Lickitung.png',
                audio: './assets/audio/Lickitung.ogg',
                description: 'Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 109,
                name: 'Koffing',
                evolutionLevel: 35,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '0.6 m',
                weight: '1.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Koffing.png',
                audio: './assets/audio/Koffing.ogg',
                description: 'In hot places, its internal gases could expand and explode without any warning. Be very careful! ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 110,
                name: 'Weezing',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.poison],
                height: '1.2 m',
                weight: '9.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.poisonColor],
                img: './assets/images/Weezing.png',
                audio: './assets/audio/Weezing.ogg',
                description: 'It lives and grows by absorbing dust, germs, and poison gases that are contained in toxic waste and garbage. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 111,
                name: 'Rhyhorn',
                evolutionLevel: 42,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock],
                height: '1.0 m',
                weight: '115.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor],
                img: './assets/images/Rhyhorn.png',
                audio: './assets/audio/Rhyhorn.ogg',
                description: 'A Pokémon with a one-track mind. Once it charges, it won\'t stop running until it falls asleep. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 112,
                name: 'Rhydon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ground, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock],
                height: '1.9 m',
                weight: '120.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.groundColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor],
                img: './assets/images/Rhydon.png',
                audio: './assets/audio/Rhydon.ogg',
                description: 'Walks on its hind legs. Shows signs of intelligence. Its armor-like hide even repels molten lava. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 113,
                name: 'Chansey',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '1.1 m',
                weight: '34.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Chansey.png',
                audio: './assets/audio/Chansey.ogg',
                description: 'A gentle and kind-hearted Pokémon that shares its nutritious eggs if it sees an injured Pokémon. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 114,
                name: 'Tangela',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.grass],
                height: '1.0 m',
                weight: '35.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.grassColor],
                img: './assets/images/Tangela.png',
                audio: './assets/audio/Tangela.ogg',
                description: 'Its identity is obscured by masses of thick, blue vines. The vines are said to never stop growing. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 115,
                name: 'Kangaskhan',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '2.2 m',
                weight: '80.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Kangaskhan.png',
                audio: './assets/audio/Kangaskhan.ogg',
                description: 'Raises its young in its belly pouch. Won\'t run from any fight to keep its young protected. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 116,
                name: 'Horsea',
                evolutionLevel: 32,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.4 m',
                weight: '8.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Horsea.png',
                audio: './assets/audio/Horsea.ogg',
                description: 'If it senses any danger, it will vigorously spray water or a special type of ink from its mouth.  ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 117,
                name: 'Seadra',
                evolutionLevel: 33,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.6 m',
                weight: '15.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Seadra.png',
                audio: './assets/audio/Seadra.ogg',
                description: 'Touching the back fin causes numbness. It hooks its tail to coral to stay in place while sleeping. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 118,
                name: 'Goldeen',
                evolutionLevel: 33,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.6 m',
                weight: '15.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Goldeen.png',
                audio: './assets/audio/Goldeen.ogg',
                description: 'When it is time for them to lay eggs, they can be seen swimming up rivers and falls in large groups. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 119,
                name: 'Seaking',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.3 m',
                weight: '39.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Seaking.png',
                audio: './assets/audio/Seaking.ogg',
                description: 'It is the male\'s job to make a nest by carving out boulders in a stream using the horn on its head. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 120,
                name: 'Staryu',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.water],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.8 m',
                weight: '34.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Staryu.png',
                audio: './assets/audio/Staryu.ogg',
                description: 'As long as the center section is unharmed, it can grow back fully even if it is chopped to bits. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 121,
                name: 'Starmie',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.1 m',
                weight: '80.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Starmie.png',
                audio: './assets/audio/Starmie.ogg',
                description: 'The center section is named the core. People think it is communicating when it glows in 7 colors. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 122,
                name: 'Mr. Mime',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fairy],
                height: '1.3 m',
                weight: '54.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fairyColor],
                img: './assets/images/MrMime.png',
                audio: './assets/audio/MrMime.ogg',
                description: 'Always practices its pantomime act. It makes enemies believe something exists that really doesn\'t. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 123,
                name: 'Scyther',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.5 m',
                weight: '56.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Scyther.png',
                audio: './assets/audio/Scyther.ogg',
                description: 'Leaps out of tall grass and slices prey with its scythes. The movement looks like that of a ninja. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 124,
                name: 'Jynx',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ice, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '1.4 m',
                weight: '40.6 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.iceColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Jynx.png',
                audio: './assets/audio/Jynx.ogg',
                description: 'Appears to move to a rhythm of its own, as if it were dancing. It wiggles its hips as it walks. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 125,
                name: 'Electabuzz',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric],
                height: '1.1 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor],
                img: './assets/images/Electabuzz.png',
                audio: './assets/audio/Electabuzz.ogg',
                description: 'If a major power outage occurs, it is certain that this Pokémon has eaten electricity at a power plant. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 126,
                name: 'Magmar',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '1.3 m',
                weight: '44.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Magmar.png',
                audio: './assets/audio/Magmar.ogg',
                description: 'Born in an active volcano. Its body is always cloaked in flames, so it looks like a big ball of fire. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 127,
                name: 'Pinsir',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.bug],
                height: '1.5 m',
                weight: '55.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.bugColor],
                img: './assets/images/Pinsir.png',
                audio: './assets/audio/Pinsir.ogg',
                description: 'Grips its prey in its pincers and squeezes hard! It can\'t move if it\'s cold, so it lives in warm places. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 128,
                name: 'Tauros',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '1.4 m',
                weight: '88.4 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Tauros.png',
                audio: './assets/audio/Tauros.ogg',
                description: 'A rowdy Pokémon with a lot of stamina. Once running, it won\'t stop until it hits something. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 129,
                name: 'Magikarp',
                evolutionLevel: 20,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.9 m',
                weight: '10.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Magikarp.png',
                audio: './assets/audio/Magikarp.ogg',
                description: 'Famous for being very unreliable. It can be found swimming in seas, lakes, rivers and shallow puddles. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 130,
                name: 'Gyarados',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '6.5 m',
                weight: '235.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Gyarados.png',
                audio: './assets/audio/Gyarados.ogg',
                description: 'Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 131,
                name: 'Lapras',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ice],
                height: '2.5 m',
                weight: '220.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.iceColor],
                img: './assets/images/Lapras.png',
                audio: './assets/audio/Lapras.ogg',
                description: 'A gentle soul that can read the minds of people. It can ferry people across the sea on its back. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 132,
                name: 'Ditto',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '0.3 m',
                weight: '4.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Ditto.png',
                audio: './assets/audio/Ditto.ogg',
                description: 'When it spots an enemy, its body transforms into an almost perfect copy of its opponent. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 133,
                name: 'Eevee',
                stone: [_enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.water, _enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.thunder, _enums_stone_enum__WEBPACK_IMPORTED_MODULE_2__.StoneEnum.fire],
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '0.3 m',
                weight: '6.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Eevee.png',
                audio: './assets/audio/Eevee.ogg',
                description: 'Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 134,
                name: 'Vaporeon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.0 m',
                weight: '29.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Vaporeon.png',
                audio: './assets/audio/Vaporeon.ogg',
                description: 'Its cell structure is similar to water molecules. It will melt away and become invisible in water. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 135,
                name: 'Jolteon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric],
                height: '0.8 m',
                weight: '24.5 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor],
                img: './assets/images/Jolteon.png',
                audio: './assets/audio/Jolteon.ogg',
                description: 'A sensitive Pokémon that easily becomes sad or angry. Every time its mood changes, it charges power. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 136,
                name: 'Flareon',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire],
                height: '0.9 m',
                weight: '25.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor],
                img: './assets/images/Flareon.png',
                audio: './assets/audio/Flareon.ogg',
                description: 'It has a flame chamber inside its body. It inhales, then blows out fire that is over 3,000F degrees. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 137,
                name: 'Porygon',
                evolutionLevel: 16,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '0.8 m',
                weight: '36.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Porygon.png',
                audio: './assets/audio/Porygon.ogg',
                description: 'The only Pokémon people anticipate can fly into space. None has managed the feat yet, however. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 138,
                name: 'Omanyte',
                evolutionLevel: 40,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.4 m',
                weight: '7.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Omanyte.png',
                audio: './assets/audio/Omanyte.ogg',
                description: 'An ancient Pokémon that was recovered from a fossil. It swims by cleverly twisting its 10 tentacles about. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 139,
                name: 'Omastar',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.0 m',
                weight: '35.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Omastar.png',
                audio: './assets/audio/Omastar.ogg',
                description: 'Sharp beaks ring its mouth. Its shell was too big for it to move freely, so it became extinct. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 140,
                name: 'Kabuto',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '0.5 m',
                weight: '11.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Kabuto.png',
                audio: './assets/audio/Kabuto.ogg',
                description: 'A Pokémon that was recovered from a fossil. It uses the eyes on its back while hiding on the sea floor. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 141,
                name: 'Kabutops',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.water],
                height: '1.3 m',
                weight: '40.5 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.waterColor],
                img: './assets/images/Kabutops.png',
                audio: './assets/audio/Kabutops.ogg',
                description: 'A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 142,
                name: 'Aerodactyl',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.rock, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.8 m',
                weight: '59.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.rockColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Aerodactyl.png',
                audio: './assets/audio/Aerodactyl.ogg',
                description: 'A savage Pokémon that died out in ancient times. It was resurrected using DNA taken from amber. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 143,
                name: 'Snorlax',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.normal],
                height: '2.1 m',
                weight: '460.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.normalColor],
                img: './assets/images/Snorlax.png',
                audio: './assets/audio/Snorlax.ogg',
                description: 'Will eat anything, even if the food happens to be a little moldy. It never gets an upset stomach. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 144,
                name: 'Articuno',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.ice, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.7 m',
                weight: '55.4 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.iceColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Articuno.png',
                audio: './assets/audio/Articuno.ogg',
                description: 'A legendary bird Pokémon. It freezes water that is contained in winter air and makes it snow. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
            {
                id: 145,
                name: 'Zapdos',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.electric, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '1.6 m',
                weight: '52.6 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.electricColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Zapdos.png',
                audio: './assets/audio/Zapdos.ogg',
                description: 'This legendary bird Pokémon is said to appear when the sky turns dark and lightning showers down. ',
                attacks: ['Tackle', 'Tail Whip', 'Water Gun', 'Withdraw']
            },
            {
                id: 146,
                name: 'Moltres',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.fire, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '2.0 m',
                weight: '60.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.fireColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Moltres.png',
                audio: './assets/audio/Moltres.ogg',
                description: 'A legendary bird Pokémon. As it flaps its blazing wings, even the night sky will turn red. ',
                attacks: ['Tackle', 'String Shot']
            },
            {
                id: 147,
                name: 'Dratini',
                evolutionLevel: 30,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.dragon],
                height: '1.8 m',
                weight: '3.3 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.dragonColor],
                img: './assets/images/Dratini.png',
                audio: './assets/audio/Dratini.ogg',
                description: 'The existence of this mythical Pokémon was only recently confirmed by a fisherman who caught one. ',
                attacks: ['Gust', 'Sand-Attack', 'Quick Attack', 'Whirlwind']
            },
            {
                id: 148,
                name: 'Dragonair',
                evolutionLevel: 55,
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.dragon],
                height: '1.1 m',
                weight: '30.0 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.dragonColor],
                img: './assets/images/Dragonair.png',
                audio: './assets/audio/Dragonair.ogg',
                description: 'According to a witness, its body was surrounded by a strange aura that gave it a mystical look. ',
                attacks: ['Tackle', 'Growl', 'Leech Seed', 'Vine Whip']
            },
            {
                id: 149,
                name: 'Dragonite',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.dragon, _enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.flying],
                height: '2.2 m',
                weight: '210 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.dragonColor, _enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.flyingColor],
                img: './assets/images/Dragonite.png',
                audio: './assets/audio/Dragonite.ogg',
                description: 'It is said that this Pokémon lives somewhere in the sea and that it flies. However, it is only a rumor. ',
                attacks: [' ThunderShock', 'Growl', ' Tail Whip', 'Thunder Wave']
            },
            {
                id: 150,
                name: 'Mewtwo',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '2.0 m',
                weight: '122 kg',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Mewtwo.png',
                audio: './assets/audio/Mewtwo.ogg',
                description: 'Its DNA is almost the same as Mew\'s. However, its size and disposition are vastly different. ',
                attacks: ['Scratch', 'Growl', 'Ember', 'Leer']
            },
            {
                id: 151,
                name: 'Mew',
                types: [_enums_types_enum__WEBPACK_IMPORTED_MODULE_0__.TypesEnum.psychic],
                height: '0.4 m',
                weight: '4.0 kg ',
                color: [_enums_color_enum__WEBPACK_IMPORTED_MODULE_1__.ColorEnum.psychicColor],
                img: './assets/images/Mew.png',
                audio: './assets/audio/Mew.ogg',
                description: 'When viewed through a microscope, this Pokémon\'s short, fine, delicate hair can be seen. ',
                attacks: ['Tackle', 'Tail Whip', 'Bubble', 'Water Gun']
            },
        ]);
    }
    getDetailsPokemon(id) {
        return this.pokemonArray[Number(id) - 1];
    }
    getAllPokemons() {
        return this.pokemonArray;
    }
};
AllPokemonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
AllPokemonService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AllPokemonService);



/***/ }),

/***/ 1371:
/*!****************************************************!*\
  !*** ./src/app/shared/services/trainer.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainerService": () => (/* binding */ TrainerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let TrainerService = class TrainerService {
    constructor() {
        this.trainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
    getUser() {
    }
};
TrainerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], TrainerService);



/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-d395420d_js-node_modules_ionic_core_dist_esm_t-5c7f8f",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap\"); /*\n * Dark Colors\n * -------------------------------------------\n */ body.dark {\n  --ion-color-primary: #428cff;\n  --ion-color-primary-rgb: 66,140,255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255,255,255;\n  --ion-color-primary-shade: #3a7be0;\n  --ion-color-primary-tint: #5598ff;\n  --ion-color-secondary: #50c8ff;\n  --ion-color-secondary-rgb: 80,200,255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255,255,255;\n  --ion-color-secondary-shade: #46b0e0;\n  --ion-color-secondary-tint: #62ceff;\n  --ion-color-tertiary: #6a64ff;\n  --ion-color-tertiary-rgb: 106,100,255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255,255,255;\n  --ion-color-tertiary-shade: #5d58e0;\n  --ion-color-tertiary-tint: #7974ff;\n  --ion-color-success: #2fdf75;\n  --ion-color-success-rgb: 47,223,117;\n  --ion-color-success-contrast: #000000;\n  --ion-color-success-contrast-rgb: 0,0,0;\n  --ion-color-success-shade: #29c467;\n  --ion-color-success-tint: #44e283;\n  --ion-color-warning: #ffd534;\n  --ion-color-warning-rgb: 255,213,52;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0,0,0;\n  --ion-color-warning-shade: #e0bb2e;\n  --ion-color-warning-tint: #ffd948;\n  --ion-color-danger: #ff4961;\n  --ion-color-danger-rgb: 255,73,97;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255,255,255;\n  --ion-color-danger-shade: #e04055;\n  --ion-color-danger-tint: #ff5b71;\n  --ion-color-dark: #f4f5f8;\n  --ion-color-dark-rgb: 244,245,248;\n  --ion-color-dark-contrast: #000000;\n  --ion-color-dark-contrast-rgb: 0,0,0;\n  --ion-color-dark-shade: #d7d8da;\n  --ion-color-dark-tint: #f5f6f9;\n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152,154,162;\n  --ion-color-medium-contrast: #000000;\n  --ion-color-medium-contrast-rgb: 0,0,0;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  --ion-color-light: #222428;\n  --ion-color-light-rgb: 34,36,40;\n  --ion-color-light-contrast: #ffffff;\n  --ion-color-light-contrast-rgb: 255,255,255;\n  --ion-color-light-shade: #1e2023;\n  --ion-color-light-tint: #383a3e;\n} body.dark ion-card-content, body.dark ion-title, body.dark ion-label ion-select, body.dark form {\n  color: #ffffff;\n} /*\n * iOS Dark Theme\n * -------------------------------------------\n */ .ios body.dark {\n  --ion-background-color: #000000;\n  --ion-background-color-rgb: 0,0,0;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-color-step-50: #0d0d0d;\n  --ion-color-step-100: #1a1a1a;\n  --ion-color-step-150: #262626;\n  --ion-color-step-200: #333333;\n  --ion-color-step-250: #404040;\n  --ion-color-step-300: #4d4d4d;\n  --ion-color-step-350: #595959;\n  --ion-color-step-400: #666666;\n  --ion-color-step-450: #737373;\n  --ion-color-step-500: #808080;\n  --ion-color-step-550: #8c8c8c;\n  --ion-color-step-600: #999999;\n  --ion-color-step-650: #a6a6a6;\n  --ion-color-step-700: #b3b3b3;\n  --ion-color-step-750: #bfbfbf;\n  --ion-color-step-800: #cccccc;\n  --ion-color-step-850: #d9d9d9;\n  --ion-color-step-900: #e6e6e6;\n  --ion-color-step-950: #f2f2f2;\n  --ion-item-background: #000000;\n  --ion-card-background: #1c1c1d;\n} .ios body.dark ion-modal {\n  --ion-background-color: var(--ion-color-step-100);\n  --ion-toolbar-background: var(--ion-color-step-150);\n  --ion-toolbar-border-color: var(--ion-color-step-250);\n  --ion-item-background: var(--ion-color-step-150);\n} /*\n * Material Design Dark Theme\n * -------------------------------------------\n */ .md body.dark {\n  --ion-background-color: #121212;\n  --ion-background-color-rgb: 18,18,18;\n  --ion-text-color: #ffffff;\n  --ion-text-color-rgb: 255,255,255;\n  --ion-border-color: #222222;\n  --ion-color-step-50: #1e1e1e;\n  --ion-color-step-100: #2a2a2a;\n  --ion-color-step-150: #363636;\n  --ion-color-step-200: #414141;\n  --ion-color-step-250: #4d4d4d;\n  --ion-color-step-300: #595959;\n  --ion-color-step-350: #656565;\n  --ion-color-step-400: #717171;\n  --ion-color-step-450: #7d7d7d;\n  --ion-color-step-500: #898989;\n  --ion-color-step-550: #949494;\n  --ion-color-step-600: #a0a0a0;\n  --ion-color-step-650: #acacac;\n  --ion-color-step-700: #b8b8b8;\n  --ion-color-step-750: #c4c4c4;\n  --ion-color-step-800: #d0d0d0;\n  --ion-color-step-850: #dbdbdb;\n  --ion-color-step-900: #e7e7e7;\n  --ion-color-step-950: #f3f3f3;\n  --ion-item-background: #1e1e1e;\n  --ion-toolbar-background: #1f1f1f;\n  --ion-tab-bar-background: #1f1f1f;\n  --ion-card-background: #1e1e1e;\n} ion-title {\n  cursor: pointer;\n  font-size: 30px;\n  font-family: \"Press Start 2P\", cursive;\n} .button {\n  font-family: \"Press Start 2P\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFx0aGVtZVxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUZBQUEsRUFBQTs7O0VBQUEsRUNLUjtFQUNFLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRFJGLEVDVUU7RUFDRSxjQUFBO0FEUkosRUNZQTs7O0VBQUEsRUFLQTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSx5QkFBQTtFQUNBLGlDQUFBO0VBRUEsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFFQSw4QkFBQTtFQUVBLDhCQUFBO0FEZEYsRUNpQkE7RUFDRSxpREFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnREFBQTtBRGRGLEVDa0JBOzs7RUFBQSxFQUtBO0VBQ0UsK0JBQUE7RUFDQSxvQ0FBQTtFQUVBLHlCQUFBO0VBQ0EsaUNBQUE7RUFFQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBRUEsOEJBQUE7RUFFQSxpQ0FBQTtFQUVBLGlDQUFBO0VBRUEsOEJBQUE7QUR2QkYsRUFySUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBd0lGLEVBcklBO0VBQ0Usc0NBQUE7QUF3SUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UHJlc3MrU3RhcnQrMlAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgJy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdQcmVzcyBTdGFydCAyUCcsIGN1cnNpdmU7XHJcbn1cclxuXHJcbiIsIi8qXHJcbiAqIERhcmsgQ29sb3JzXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG5ib2R5LmRhcmsge1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XHJcblxyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzUwYzhmZjtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM2MmNlZmY7XHJcblxyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNmE2NGZmO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LDEwMCwyNTU7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNzk3NGZmO1xyXG5cclxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xyXG5cclxuICAtLWlvbi1jb2xvci13YXJuaW5nOiAjZmZkNTM0O1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkOTQ4O1xyXG5cclxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNmZjQ5NjE7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LDczLDk3O1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXRpbnQ6ICNmZjViNzE7XHJcblxyXG4gIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XHJcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xyXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XHJcbiAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xyXG5cclxuICAtLWlvbi1jb2xvci1tZWRpdW06ICM5ODlhYTI7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDAsMCwwO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcclxuICAtLWlvbi1jb2xvci1tZWRpdW0tdGludDogI2EyYTRhYjtcclxuXHJcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICMyMjI0Mjg7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwzNiw0MDtcclxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQ6ICMzODNhM2U7XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQsIGlvbi10aXRsZSwgaW9uLWxhYmVsIGlvbi1zZWxlY3QsIGZvcm17XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIGlPUyBEYXJrIFRoZW1lXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcblxyXG4uaW9zIGJvZHkuZGFyayB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMCwwLDA7XHJcblxyXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xyXG5cclxuICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xyXG4gIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xyXG5cclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblxyXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFjMWMxZDtcclxufVxyXG5cclxuLmlvcyBib2R5LmRhcmsgaW9uLW1vZGFsIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xMDApO1xyXG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcclxuICAtLWlvbi10b29sYmFyLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwKTtcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLm1kIGJvZHkuZGFyayB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XHJcblxyXG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLS1pb24tdGV4dC1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xyXG5cclxuICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XHJcblxyXG4gIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XHJcbiAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XHJcbiAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XHJcbiAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XHJcbiAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XHJcbiAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XHJcbiAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XHJcbiAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XHJcbiAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XHJcbiAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XHJcbiAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XHJcbiAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XHJcbiAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XHJcbiAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XHJcbiAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XHJcbiAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XHJcbiAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XHJcbiAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XHJcbiAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XHJcblxyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzFlMWUxZTtcclxuXHJcbiAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG5cclxuICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XHJcblxyXG4gIC0taW9uLWNhcmQtYmFja2dyb3VuZDogIzFlMWUxZTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1161:
/*!**********************************************************************!*\
  !*** ./src/app/components/account/account.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6639:
/*!********************************************************************************!*\
  !*** ./src/app/components/all-pokemons/all-pokemons.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-card-content {\n  color: #0d0d0d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1wb2tlbW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJhbGwtcG9rZW1vbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1jb250ZW50IHtcclxuICBjb2xvcjogIzBkMGQwZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8155:
/*!***********************************************************************!*\
  !*** ./src/app/components/login/login-page.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1936:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.page.scss?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#img {\n  width: 370px;\n  height: 300px;\n  cursor: pointer;\n}\n\n#stone {\n  width: 34px;\n  height: 34px;\n}\n\n.shake {\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(4px, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBva2Vtb24tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnRUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQ0FBQTtFQUNGO0VBRUE7SUFDRSxpQ0FBQTtFQUFGO0VBR0E7SUFDRSxrQ0FBQTtFQURGO0VBSUE7SUFDRSxpQ0FBQTtFQUZGO0FBQ0YiLCJmaWxlIjoicG9rZW1vbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWcge1xyXG4gIHdpZHRoOiAzNzBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3N0b25lIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zaGFrZSB7XHJcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSBib3RoO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAxMCUsIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xcHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMjAlLCA4MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAlLCA1MCUsIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNDAlLCA2MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 4521:
/*!********************************************************************!*\
  !*** ./src/app/components/signin/signin.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-header>\r\n    <ion-row>\r\n      <ion-title (click)=\"goBackToPokedex()\">Pokedex</ion-title>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-item>\r\n          <ion-select interface=\"popover\" (ionChange)=\"selectedLang($event)\" value=\"en\">\r\n            <ion-select-option *ngFor=\"let lang of langSelect\" [value]=\"lang\"> {{ lang }}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-icon name=\"moon\" slot=\"start\"></ion-icon>\r\n          <ion-toggle color=\"dark\" (ionChange)=\"checkToggle($event)\" id=\"themeToggle\" slot=\"end\"></ion-toggle>\r\n        </ion-item>\r\n      <ion-col offset=\"8\">\r\n        <ion-button color=\"light\" class=\"button\" (click)=\"goSignin()\"\r\n                    *ngIf=\"currentUrl !== '/signin' && !user\">{{'SIGNIN' | translate}}\r\n        </ion-button>\r\n        <ion-button color=\"light\" class=\"button\" (click)=\"goLogin()\"\r\n                    *ngIf=\"currentUrl !== '/login' && !user\">{{'LOGIN' | translate}}\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col *ngIf=\"trainerService.trainer | async as user\">\r\n        <ion-label>Pokedex {{'OF' | translate}} {{user.login}}</ion-label>\r\n        <ion-button color=\"light\" class=\"button\"\r\n                    (click)=\"goAccount()\">{{'ACCOUNT' | translate}}</ion-button>\r\n        <ion-button color=\"light\" class=\"button\" (click)=\"logOut()\">{{'LOGOUT' | translate}}</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-router-outlet></ion-router-outlet>\r\n  </ion-content>\r\n</ion-app>\r\n";

/***/ }),

/***/ 1610:
/*!**********************************************************************!*\
  !*** ./src/app/components/account/account.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\r\n  account works!\r\n</p>\r\n";

/***/ }),

/***/ 3665:
/*!********************************************************************************!*\
  !*** ./src/app/components/all-pokemons/all-pokemons.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid *ngIf=\"allPokemon.getAllPokemons() | async as PokemonArray\">\r\n    <ion-row>\r\n      <ion-col *ngFor=\"let pokemon of PokemonArray | paginate: { itemsPerPage: 24, currentPage: p }\" sizeLg=\"2\" sizeXs=\"11\">\r\n        <ion-card (click)=\"goToDetails(pokemon.id)\"\r\n                  [ngStyle]=\"{'cursor': 'pointer',\r\n                  'background': pokemon.types.length == 1 ?\r\n                  pokemon.color[0] : 'linear-gradient(to right,'+ pokemon.color[0] + ',' + pokemon.color[1]+ ')'\r\n                  }\"\r\n        >\r\n          <ion-card-header>\r\n            <ion-card-title>#{{pokemon.id}} {{'NAMES.' + pokemon.name | translate}}</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content *ngIf=\"pokemon.types.length == 1\">\r\n            {{'NAMES.' + pokemon.name | translate}} {{'CARD_SUBJECT_ONE' | translate}}\r\n            {{'TYPES.' + pokemon.types[0] | translate}} {{'POKEMON' | translate}}\r\n          </ion-card-content>\r\n          <ion-card-content *ngIf=\"pokemon.types.length > 1\">\r\n            {{'NAMES.' + pokemon.name | translate}} {{'CARD_SUBJECT_TWO' | translate}} {{'TYPES.' + pokemon.types[0] | translate}}\r\n            /{{'TYPES.' + pokemon.types[1] | translate}} {{'POKEMON' | translate}}\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 1945:
/*!***********************************************************************!*\
  !*** ./src/app/components/login/login-page.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-title>{{'LOGIN' | translate}}</ion-title>\r\n  <form (ngSubmit)=\"validate()\" [formGroup]=\"userForm\">\r\n    <ion-col>\r\n      <ion-label>{{'USERNAME' | translate}}:</ion-label>\r\n      <input formControlName=\"name\" type=\"text\">\r\n      <ion-label *ngIf=\"usernameCtrl.dirty && usernameCtrl.hasError('required')\">\r\n        * {{'USERNAME' | translate}} {{'IS_REQUIRED' | translate}}</ion-label>\r\n    </ion-col>\r\n    <div formGroupName=\"passwordForm\">\r\n      <ion-col>\r\n        <ion-label>{{'PASSWORD' | translate}}:</ion-label>\r\n        <input formControlName=\"password\" type=\"password\">\r\n        <ion-label\r\n          *ngIf=\"passwordCtrl.dirty && passwordCtrl.hasError('required')\">{{'PASSWORD' | translate}} {{'IS_REQUIRED' | translate}}</ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-label>{{'PASSWORD_CONFIRM' | translate}}:</ion-label>\r\n        <input formControlName=\"passwordConfirm\" type=\"password\">\r\n        <ion-label\r\n          *ngIf=\"passwordConfirmCtrl.dirty && passwordConfirmCtrl.hasError('required')\">{{'PASSWORD_CONFIRM_REQUIRED' | translate}}\r\n        </ion-label>\r\n      </ion-col>\r\n      <ion-label *ngIf=\"passwordForm.dirty && passwordForm.hasError('matchingError')\">\r\n        {{'PASSWORD_NOT_MATCHING' | translate}}\r\n      </ion-label>\r\n    </div>\r\n    <ion-button [disabled]=\"userForm.invalid\" type=\"submit\">{{'VALIDATE' | translate}}</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ }),

/***/ 8632:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pokemon-details/pokemon-details.page.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-toolbar>\r\n        <ion-title [innerHTML]=\"'NAMES.' + pokemon.name | translate\"></ion-title>\r\n      </ion-toolbar>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button (click)=\"previousPokemon()\" *ngIf=\"pokemonId > 1\">\r\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-img id=\"img\" (click)=\"playAudio()\" [alt]=\"pokemon.name\" [src]=\"pokemon.img\"></ion-img>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-text [innerHTML]=\"'DESC.' + pokemon.name | translate\"></ion-text>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text>{{'WEIGHT' | translate}}: {{pokemon.weight}}</ion-text>\r\n          </ion-col>\r\n          <ion-col>{{'HEIGHT' | translate}}: {{pokemon.height}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-text>{{'LEVEL' | translate}} :</ion-text>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-input (ionChange)=\"manageLevel($event)\" max=\"100\" min=\"1\" type=\"number\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n          <ion-row>\r\n            <ion-button (click)=\"nextPokemon()\"\r\n                        *ngIf=\"pokemon.evolutionLevel && level >= pokemon.evolutionLevel\">{{'EVOLVE' | translate}}\r\n            </ion-button>\r\n            <ion-button (click)=\"nextPokemon()\" *ngIf=\"pokemon.exchange\">{{'EXCHANGE' | translate}}</ion-button>\r\n            <div *ngFor=\"let stone of pokemon.stone\">\r\n              <ion-img (click)=\"useStone(stone)\" id=\"stone\" [src]='stone'></ion-img>\r\n            </div>\r\n          </ion-row>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-list>\r\n          <h1>{{'ATTACKS' | translate}}: </h1>\r\n<!--          <ion-item *ngFor=\"let attacks of pokemon.attacks\">-->\r\n<!--            <ion-label>-->\r\n<!--              {{attacks}}-->\r\n<!--            </ion-label>-->\r\n<!--          </ion-item>-->\r\n          <ion-text> Coming soon ! </ion-text>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"nextPokemon()\" *ngIf=\"pokemonId < 151\">\r\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 4147:
/*!********************************************************************!*\
  !*** ./src/app/components/signin/signin.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content xmlns=\"http://www.w3.org/1999/html\">\r\n  <ion-title>{{'SIGNIN' | translate}}</ion-title>\r\n  <form (ngSubmit)=\"validate()\" [formGroup]=\"userForm\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-label>{{'USERNAME' | translate}}:</ion-label>\r\n        <input formControlName=\"name\" type=\"text\">\r\n        <ion-label *ngIf=\"usernameCtrl.dirty && usernameCtrl.hasError('required')\">{{'USERNAME' | translate}}\r\n          {{'IS_REQUIRED' | translate}}</ion-label>\r\n      </ion-col>\r\n      <div formGroupName=\"passwordForm\">\r\n        <ion-col>\r\n          <ion-label>{{'PASSWORD' | translate}}:</ion-label>\r\n          <input formControlName=\"password\" type=\"password\">\r\n          <ion-label\r\n            *ngIf=\"passwordCtrl.dirty && passwordCtrl.hasError('required')\">{{'PASSWORD' | translate}} {{'IS_REQUIRED' | translate}}</ion-label>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-label>{{'PASSWORD_CONFIRM' | translate}}:</ion-label>\r\n          <input formControlName=\"passwordConfirm\" type=\"password\">\r\n          <ion-label\r\n            *ngIf=\"passwordConfirmCtrl.dirty && passwordConfirmCtrl.hasError('required')\">{{'PASSWORD_CONFIRM_REQUIRED' | translate}}\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-label *ngIf=\"passwordForm.dirty && passwordForm.hasError('matchingError')\">\r\n          {{'PASSWORD_NOT_MATCHING' | translate}}\r\n        </ion-label>\r\n      </div>\r\n    </ion-row>\r\n    <ion-button [disabled]=\"userForm.invalid\" type=\"submit\">{{'VALIDATE' | translate}}</ion-button>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map