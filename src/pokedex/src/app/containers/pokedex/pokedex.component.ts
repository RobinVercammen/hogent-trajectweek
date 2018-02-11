import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Observable } from 'rxjs/Observable';
import { PokemonListItem } from '../../models/pokemon-list-item';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokeList$: Observable<PokemonListItem[]>;

  constructor(private service: PokedexService) { }

  ngOnInit() {
    this.pokeList$ = this.service.getPokemonsWithFavorites();
  }

}
