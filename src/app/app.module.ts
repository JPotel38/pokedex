import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AllPokemonsComponent} from './components/all-pokemons/all-pokemons.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginPage} from './components/login/login-page.component';
import {SigninComponent} from './components/signin/signin.component';
import {PokemonDetailsPage} from "./components/pokemon-details/pokemon-details.page";
import {TypeNamePipe} from './pipes/type-name.pipe';
import {TeamComponent} from "./components/team/team.component";

export const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent, PokemonDetailsPage, AllPokemonsComponent, LoginPage, SigninComponent, TypeNamePipe, TeamComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,

  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
