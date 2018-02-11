import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { PokemonDescription } from '../../models/pokemon-description';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent {
  public pokemon$: Observable<PokemonDescription>;
  constructor(route: ActivatedRoute) {
    this.pokemon$ = route.data.pluck('pokemon');
  }

  onFavorite(favorite: boolean, pokemon: PokemonDescription) {

  }
}
