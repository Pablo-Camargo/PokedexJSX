import React, { useEffect, useState } from "react";

import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";
import { getPokemonDetails } from "../hooks/getPokemonsDetails";
import { useParams } from "react-router-dom";

interface PokemonDetailesProps {
    
}

export const PokemonDetailes: React.FC<PokemonDetailesProps> = () => {
    const [selectedPokemonDetails, setSelectedPokemonDetail] = useState<
        PokemonDetails | undefined
    >(undefined);

    const { name } = useParams();

    useEffect(() => {
        if (!name) return;
        getPokemonDetails(name).then((resp) => setSelectedPokemonDetail(resp));
    }, [name]);
    return (
        <div>
            <img
                src={
                    selectedPokemonDetails?.sprites.other?.["official-artwork"]
                        .front_default
                }
                alt=""
            />
            <h2>Pokemon selecionado: {name} </h2>
        </div>
    );
};

export default PokemonDetailes;
