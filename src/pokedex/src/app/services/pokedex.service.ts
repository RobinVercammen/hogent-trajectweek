import { PokemonDto } from './../dto/pokemon-dto';
import { PokemonDescription } from '../models/pokemon-description';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { PokemonListItem } from '../models/pokemon-list-item';

@Injectable()
export class PokedexService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(`${this.baseUrl}/pokedex/2`).map(r => {
      const entries = ((r as any).pokemon_entries as any[]);
      const pokemons = entries.map(e => new PokemonListItem(e.entry_number, e.pokemon_species.name));

      return pokemons;
    });
  }

  getPokemon(number: number) {
    return this.http.get(`${this.baseUrl}/pokemon/${number}/`).map((r: PokemonDto) => {
      return new PokemonDescription(r);
    });
  }
}
