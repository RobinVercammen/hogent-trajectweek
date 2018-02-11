import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { PokemonDescription } from '../../models/pokemon-description';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { PokedexService } from '../../services/pokedex.service';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-pokemon-description',
  templateUrl: './pokemon-description.component.html',
  styleUrls: ['./pokemon-description.component.css']
})
export class PokemonDescriptionComponent {
  public pokemon$: Observable<PokemonDescription>;
  constructor(private pokedexService: PokedexService, private db: AngularFirestore) {
    this.pokemon$ = pokedexService.getPokemonDescription();
  }

  onFavorite(favorite: boolean, pokemon: PokemonDescription) {
    this.db.collection('favorites').doc(pokemon.number + '').set({ id: pokemon.number, favorite });
  }
}
