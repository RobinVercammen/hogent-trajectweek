declare class Observable<T>{
    static combineLatest<T, U, V>(a: Observable<T>, b: Observable<U>, c: (a: T, b: U) => V): Observable<V>;
}

interface Pokemon {
    id: number
}

interface Favorite {
    id: number;
}

interface PokemonFavorite {
    id: number;
    favorite: boolean;
}

class ImperativeExample {
    pokemons: Pokemon[];
    favorites: Favorite[];
    favoritePokemons: PokemonFavorite[];

    setPokemon(pokemon: Pokemon[]) {
        this.pokemons = pokemon;
        this.combinePokemonAndFavorite();
    }

    setFavorites(favorites: Favorite[]) {
        this.favorites = favorites;
        this.combinePokemonAndFavorite();
    }

    combinePokemonAndFavorite() {
        if (this.pokemons && this.favorites) {
            this.favoritePokemons = this.pokemons.map(p => ({ ...p, favorite: !!this.favorites.find(f => f.id === p.id) }))
        }
    }
}

class ReactiveExample {
    pokemons$: Observable<Pokemon[]>;
    favorites$: Observable<Favorite[]>;
    favoritePokemons$ = Observable.combineLatest(this.pokemons$, this.favorites$, (pokemons, favorites) => {
        return pokemons.map(p => ({ ...p, favorite: !!favorites.find(f => f.id === p.id) }))
    });
}