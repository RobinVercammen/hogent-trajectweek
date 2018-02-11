import { LoadingService } from './services/loading-service';
import { LoadingInterceptor } from './interceptors/loading-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PokedexComponent } from './containers/pokedex/pokedex.component';

import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

import { PokedexService } from './services/pokedex.service';
import { PokemonDescriptionResolver } from './resolvers/pokemon-description-resolver';
import { GlobalLoaderComponent } from './components/global-loader/global-loader.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDescriptionComponent,
    PokemonListComponent,
    GlobalLoaderComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: PokedexComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
