import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AllPokemonsComponent} from './components/all-pokemons/all-pokemons.component';

const routes: Routes = [
  {
    path: 'pokemon-details/:id',
    loadChildren: () => import('./components/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsPageModule)
  },
  {
    path: '',
    component: AllPokemonsComponent
  },
  {
    path: '**',
    component: AllPokemonsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
