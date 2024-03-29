import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './shared/modules/app-routing.module';
import {AllPokemonsComponent} from './pages/all-pokemons/all-pokemons.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './pages/login/login.component';
import {SigninComponent} from './pages/signin/signin.component';
import {TypeNamePipe} from './pipes/type-name.pipe';
import {TeamComponent} from "./pages/team/team.component";
import {AccountComponent} from "./pages/account/account.component";
import {HeaderComponent} from "./components/header/header.component";
import {I18nModule} from "./shared/modules/i18n.module";
import {FooterComponent} from "./components/footer/footer.component";
import {RouteReuseStrategy} from "@angular/router";
import {PokemonDetailsComponent} from "./pages/pokemon-details/details/pokemon-details.component";
import {UserPopoverComponent} from "./components/user-popover/user-popover.component";
import {CaptureComponent} from "./pages/capture/capture.component";
import {SlideComponent} from "./pages/pokemon-details/slide/slide.component";

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    PokemonDetailsComponent,
    AllPokemonsComponent,
    CaptureComponent,
    LoginComponent,
    SigninComponent,
    TypeNamePipe,
    TeamComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent,
    UserPopoverComponent],
  imports: [
    BrowserModule,
    I18nModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {
}
