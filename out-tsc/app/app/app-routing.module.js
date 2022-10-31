import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AllPokemonsComponent } from './components/all-pokemons/all-pokemons.component';
import { AllPokemonResolver } from './shared/resolver/all-pokemon-resolver.service';
import { LoginPage } from './components/login/login-page.component';
import { AccountComponent } from './components/account/account.component';
import { SigninComponent } from './components/signin/signin.component';
import { PokemonDetailsPage } from "./components/pokemon-details/pokemon-details.page";
import { TeamComponent } from "./components/team/team.component";
const routes = [
    {
        path: 'pokemon-details/:id',
        component: PokemonDetailsPage
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: '',
        component: AllPokemonsComponent,
        resolve: {
            allPokemon: AllPokemonResolver
        }
    },
    {
        path: '**',
        component: AllPokemonsComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map