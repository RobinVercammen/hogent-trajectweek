import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PokedexComponent } from './containers/pokedex/pokedex.component';

import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonSpriteComponent } from './components/pokemon-sprite/pokemon-sprite.component';

import { PokedexService } from './services/pokedex.service';
import { PokemonDescriptionResolver } from './resolvers/pokemon-description-resolver';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDescriptionComponent,
    PokemonListComponent,
    PokemonSpriteComponent
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
    PokemonDescriptionResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
