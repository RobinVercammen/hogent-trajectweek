import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FavoriteDto } from './../dto/favorite-dto';
import { PokemonDto } from './../dto/pokemon-dto';
import { PokemonDescription } from '../models/pokemon-description';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/combineLatest';
import { PokemonListItem } from '../models/pokemon-list-item';

@Injectable()
export class PokedexService {
  private baseUrl = 'https://angular-hogent.azurewebsites.net/api/pokemon';
  private favorites$ = new BehaviorSubject<FavoriteDto[]>([]);
  private pokemons$ = new BehaviorSubject<PokemonListItem[]>([]);
  private pokemon$ = new BehaviorSubject<PokemonDto>(null);
  private searchQuery$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient, private db: AngularFirestore) {
    this.getFavorites().subscribe(this.favorites$);
  }

  getPokemonsWithFavorites() {
    return Observable.combineLatest(this.pokemons$, this.favorites$,
      this.searchQuery$.debounceTime(250), (pokemons, favorites, searchQuery) => {
        return pokemons.filter(p => p.name.toLowerCase().startsWith(searchQuery.toLowerCase())).map(p => {
          const fav = favorites.find(f => f.id === p.id);
          return {
            ...p,
            favorite: fav && fav.favorite
          };
        });
      });
  }

  getPokemons() {
    return this.http.get(`${this.baseUrl}`).map(r => {
      const entries = ((r as any).pokemon_entries as any[]);
      const pokemons = entries.map(e => new PokemonListItem(e.entry_number, e.pokemon_species.name));
      return pokemons;
    }).do((p) => { this.pokemons$.next(p); });
  }
  getPokemon(number: number) {
    return this.http.get<PokemonDto>(`${this.baseUrl}/${number}`).do(p => this.pokemon$.next(p));
  }

  getPokemonDescription() {
    return Observable.combineLatest(this.pokemon$, this.favorites$, (r: PokemonDto, favorites) => {
      const fav = favorites.find(f => f.id === r.id);
      const pokemon = new PokemonDescription(r);
      pokemon.favorite = fav && fav.favorite;
      return pokemon;
    });
  }

  searchList(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }

  private getFavorites() {
    return this.db.collection('favorites').valueChanges();
  }
}
