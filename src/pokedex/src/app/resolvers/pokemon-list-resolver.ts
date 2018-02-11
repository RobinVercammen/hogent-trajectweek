import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';
import { PokemonListItem } from '../models/pokemon-list-item';

@Injectable()
export class PokemonListResolver implements Resolve<PokemonListItem[]> {
    constructor(private service: PokedexService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getPokemons();
    }
}
