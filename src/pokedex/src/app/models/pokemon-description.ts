import { PokemonDto } from '../dto/pokemon-dto';

export class PokemonDescription {
    number: number;
    name: string;
    weight: number;
    height: number;
    types: string;


    constructor(dto: PokemonDto) {
        this.number = dto.id;
        this.name = dto.name;
        this.weight = dto.weight;
        this.height = dto.height;
        this.types = dto.types.map(t => t.type.name).join(', ');
    }
}
