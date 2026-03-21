import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AllPokemonsComponent} from './app/pages/all-pokemons/all-pokemons.component';
import {LoginComponent} from './app/pages/login/login.component';
import {AccountComponent} from './app/pages/account/account.component';
import {SigninComponent} from './app/pages/signin/signin.component';
import {TeamComponent} from "./app/pages/team/team.component";
import {CaptureComponent} from "./app/pages/capture/capture.component";
import {SlideComponent} from "./app/pages/pokemon-details/slide/slide.component";
import {AppComponent} from "./app/app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'pokemon-details/:id',
    component: SlideComponent
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
    path: 'capture',
    component: CaptureComponent
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
export class AppRoutes {
}
