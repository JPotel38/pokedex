import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AllPokemonsComponent} from './components/all-pokemons/all-pokemons.component';
import {AllPokemonResolver} from './shared/resolver/all-pokemon-resolver.service';
import {LoginPage} from './components/login/login-page.component';
import {AccountComponent} from './components/account/account.component';
import {SigninComponent} from './components/signin/signin.component';
import {PokemonDetailsPage} from "./components/pokemon-details/details/pokemon-details.page";
import {TeamComponent} from "./components/team/team.component";
import {PokemonContainerComponent} from "./components/pokemon-details/pokemon-container/pokemon-container.component";

const routes: Routes = [
  {
    path: 'pokemon-details/:id',
    component: PokemonContainerComponent
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
