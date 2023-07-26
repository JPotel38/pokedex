import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AllPokemonsComponent} from '../../pages/all-pokemons/all-pokemons.component';
import {AllPokemonResolver} from '../resolver/all-pokemon-resolver.service';
import {LoginComponent} from '../../pages/login/login.component';
import {AccountComponent} from '../../pages/account/account.component';
import {SigninComponent} from '../../pages/signin/signin.component';
import {TeamComponent} from "../../pages/team/team.component";
import {
  PokemonContainerComponent
} from "../../pages/pokemon-details/pokemon-container/pokemon-container.component";

const routes: Routes = [
  {
    path: 'pokemon-details/:id',
    component: PokemonContainerComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
