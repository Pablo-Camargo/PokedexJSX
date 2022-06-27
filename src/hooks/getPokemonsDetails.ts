import axios from "axios";

import { PokemonDetails } from "./interfaces/PokemonDetails";

export async function getPokemonDetails(name: string): Promise<PokemonDetails> {
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
    
    const response = await axios.get<PokemonDetails>(endPoint);

    return response.data;
}
