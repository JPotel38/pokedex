import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AllPokemonsComponent} from './components/all-pokemons/all-pokemons.component';
import {PokemonDetailsResolver} from './shared/resolver/pokemon-details-resolver.service';
import {AllPokemonResolver} from './shared/resolver/all-pokemon-resolver.service';

const routes: Routes = [
  {
    path: 'pokemon-details/:id',
    loadChildren: () => import('./components/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsPageModule),
    resolve: {
      pokemon: PokemonDetailsResolver
    }
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
