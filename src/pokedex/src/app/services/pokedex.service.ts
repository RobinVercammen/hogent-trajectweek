import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { PokemonList } from '../models/pokemonList';

@Injectable()
export class PokedexService {

  constructor(private http: HttpClient) { }

  getPokemons (){
    return this.http.get('https://pokeapi.co/api/v2/pokedex/2').map(r => {
      const entries = ((r as any).pokemon_entries as any[]);
      const pokemons = entries.map(e => new PokemonList(e.entry_number, e.pokemon_species.name));

      return pokemons;
  }
  }

}
