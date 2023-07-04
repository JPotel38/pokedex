import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './shared/modules/app-routing.module';
import {AllPokemonsComponent} from './components/all-pokemons/all-pokemons.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginPage} from './components/login/login-page.component';
import {SigninComponent} from './components/signin/signin.component';
import {PokemonDetailsPage} from "./components/pokemon-details/details/pokemon-details.page";
import {TypeNamePipe} from './pipes/type-name.pipe';
import {TeamComponent} from "./components/team/team.component";
import {AccountComponent} from "./components/account/account.component";
import {HeaderComponent} from "./components/header/header.component";
import {PokemonContainerComponent} from "./components/pokemon-details/pokemon-container/pokemon-container.component";
import {I18nModule} from "./shared/modules/i18n.module";

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    PokemonDetailsPage,
    PokemonContainerComponent,
    AllPokemonsComponent,
    LoginPage,
    SigninComponent,
    TypeNamePipe,
    TeamComponent,
    AccountComponent,
    HeaderComponent],
  imports: [
    BrowserModule,
    I18nModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
