import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './shared/modules/app-routing.module';
import {AllPokemonsComponent} from './pages/all-pokemons/all-pokemons.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginPage} from './pages/login/login-page.component';
import {SigninComponent} from './pages/signin/signin.component';
import {TypeNamePipe} from './pipes/type-name.pipe';
import {TeamComponent} from "./pages/team/team.component";
import {AccountComponent} from "./pages/account/account.component";
import {HeaderComponent} from "./components/header/header.component";
import {PokemonContainerComponent} from "./pages/pokemon-details/pokemon-container/pokemon-container.component";
import {I18nModule} from "./shared/modules/i18n.module";
import {FooterComponent} from "./components/footer/footer.component";
import {RouteReuseStrategy} from "@angular/router";
import {PokemonDetailsComponent} from "./pages/pokemon-details/details/pokemon-details.component";
import {UserPopoverComponent} from "./components/user-popover/user-popover.component";
import {CaptureComponent} from "./pages/capture/capture.component";

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    PokemonDetailsComponent,
    PokemonContainerComponent,
    AllPokemonsComponent,
    CaptureComponent,
    LoginPage,
    SigninComponent,
    TypeNamePipe,
    TeamComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    UserPopoverComponent],
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
