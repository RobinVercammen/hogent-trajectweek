import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PokedexComponent } from './containers/pokedex/pokedex.component';
import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokemonDescriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      component: PokedexComponent
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
