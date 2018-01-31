import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Observable } from 'rxjs/Observable';
import { PokemonList } from '../../models/pokemonList';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokeList$: Observable<PokemonList[]>;
  
  pikachu = {
    title: 'Pikachu', description: `
  Pikachu is a short, chubby rodent Pokémon. It is covered in yellow fur with two horizontal brown stripes on its back. It has a small mouth, long, pointed ears with black tips, brown eyes, and two red circles on its cheeks. There are pouches inside its cheeks where it stores electricity. It has short forearms with five fingers on each paw, and its feet each have three toes. At the base of its lightning bolt-shaped tail is patch of brown fur at the base. A female will have a V-shaped notch at the end of its tail, which looks like the top of a heart. It is classified as a quadruped, but it has been known to stand and walk on its hind legs.
  `};
  constructor(private service: PokedexService) { }

  ngOnInit() {
    this.pokeList$ = this.service.getPokemons();
  }

}
