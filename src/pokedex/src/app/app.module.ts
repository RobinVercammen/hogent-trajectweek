import { LoadingService } from './services/loading-service';
import { LoadingInterceptor } from './interceptors/loading-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// Containers
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { PokemonDescriptionComponent } from './containers/pokemon-description/pokemon-description.component';

// Dumb components
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonSpriteComponent } from './components/pokemon-sprite/pokemon-sprite.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';

// Services
import { PokedexService } from './services/pokedex.service';

// Resolvers
import { PokemonDescriptionResolver } from './resolvers/pokemon-description-resolver';
import { PokemonListResolver } from './resolvers/pokemon-list-resolver';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDescriptionComponent,
    PokemonListComponent,
    GlobalLoaderComponent,
    FavoriteComponent,
    PokemonSpriteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot([{
      path: '',
      component: PokedexComponent,
      resolve: {
        'pokemons': PokemonListResolver
      },
      children: [
        {
          path: ':number',
          component: PokemonDescriptionComponent,
          resolve: {
            'pokemon': PokemonDescriptionResolver
          },
        }
      ]
    }]),
  ],
  providers: [
    PokedexService,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    PokemonDescriptionResolver,
    PokemonListResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
