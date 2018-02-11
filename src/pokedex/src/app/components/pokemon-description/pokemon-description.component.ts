import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
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
  
  constructor (route: ActivatedRoute, private db: AngularFireDatabase) {
    this.pokemon$ = route.data.pluck('pokemon');
  }

  like (id: number)
  {
    console.log('test');
    this.db.list('/items').push(id);
  }
}
