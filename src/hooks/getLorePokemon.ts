import axios from "axios";

import { PokemonLore } from "./interfaces/PokemonLore";

export async function lorePokemon(offSet: string | "0"): Promise<PokemonLore> {
    const endPoint = `https://pokeapi.co/api/v2/pokemon-species/${offSet}/`;

    const response = await axios.get<PokemonLore>(endPoint);

    return response.data;
}
