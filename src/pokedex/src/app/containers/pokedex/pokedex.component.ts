import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Observable } from 'rxjs/Observable';
import { PokemonListItem } from '../../models/pokemon-list-item';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/withLatestFrom';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokeList$: Observable<PokemonListItem[]>;
  likedPokeIds$: Observable<any>;
  likedPokeList$: Observable<PokemonListItem[]>;

  constructor(private service: PokedexService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pokeList$ = this.service.getPokemons();
    this.likedPokeIds$ = this.db.list('items').valueChanges();      // TODO Local variable?

    this.likedPokeList$ =  Observable.combineLatest(this.likedPokeIds$, this.pokeList$,
      (likedIds: number[], pokemons: PokemonListItem[] ) => {
        return pokemons.filter(p => likedIds.indexOf(p.id) > -1);
      });
  }

}
