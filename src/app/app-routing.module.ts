import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AllPokemonsComponent} from './components/all-pokemons/all-pokemons.component';
import {PokemonDetailsResolver} from './shared/resolver/pokemon-details-resolver.service';
import {AllPokemonResolver} from './shared/resolver/all-pokemon-resolver.service';
import {LoginPage} from './components/login/login-page.component';
import {AccountComponent} from './components/account/account.component';
import {SigninComponent} from './components/signin/signin.component';
import {PokemonDetailsPage} from "./components/pokemon-details/pokemon-details.page";

const routes: Routes = [
  {
    path: 'pokemon-details/:id',
    component: PokemonDetailsPage,
    resolve: {
      pokemon: PokemonDetailsResolver
    }
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
