export interface PokemonDto {
    forms: FormDto[];
    abilities: AbilityDto[];
    stats: StatDto[];
    name: string;
    weight: number;
    moves: MoveDto[];
    sprites: SpritesDto;
    held_items: any[];
    location_area_encounters: string;
    height: number;
    is_default: boolean;
    species: FormDto;
    id: number;
    order: number;
    game_indices: GameindexDto[];
    base_experience: number;
    types: TypeDto[];
}

interface TypeDto {
    slot: number;
    type: FormDto;
}

interface GameindexDto {
    version: FormDto;
    game_index: number;
}

interface SpritesDto {
    back_female?: any;
    back_shiny_female?: any;
    back_default: string;
    front_female?: any;
    front_shiny_female?: any;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

interface MoveDto {
    version_group_details: VersiongroupdetailDto[];
    move: FormDto;
}

interface VersiongroupdetailDto {
    move_learn_method: FormDto;
    level_learned_at: number;
    version_group: FormDto;
}

interface StatDto {
    stat: FormDto;
    effort: number;
    base_stat: number;
}

interface AbilityDto {
    slot: number;
    is_hidden: boolean;
    ability: FormDto;
}

interface FormDto {
    url: string;
    name: string;
}
