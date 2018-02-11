export class PokemonListItem {
    id: number;
    name: string;
    favorite: boolean;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
