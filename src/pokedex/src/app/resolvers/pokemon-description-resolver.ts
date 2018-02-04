import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PokedexService } from '../services/pokedex.service';
import { PokemonDescription } from '../models/pokemon-description';

@Injectable()
export class PokemonDescriptionResolver implements Resolve<PokemonDescription> {
    constructor(private service: PokedexService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const number = route.params['number'];
        return this.service.getPokemon(number);
    }
}
