import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PokedexComponent } from './containers/pokedex/pokedex.component';

import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

import { PokedexService} from './services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDescriptionComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: PokedexComponent
    }]),
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
