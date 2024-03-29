import axios from "axios";
import { getPokemonDetails } from "./getPokemonsDetails";
import { PokemonDetails } from "./interfaces/PokemonDetails";

export interface PokemonListInterface {
    name: string;
    url: string;
}

interface ListPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetails[];
}

export async function listPokemon(
    offSet: string | "0"
): Promise<ListPokemonsInterface> {
    const endPoint = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`;
    const response = await axios.get<ListPokemonsInterface>(endPoint);

    const promiseArr = response.data.results.map(({ name }) =>
        getPokemonDetails(name)
    );
    const resultsPromise = await Promise.all(promiseArr);
    return {
        ...response.data,
        results: resultsPromise,
    };
}
