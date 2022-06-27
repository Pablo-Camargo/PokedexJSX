import React, { useEffect, useState } from "react";

import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";
import { PokemonLore } from "../hooks/interfaces/PokemonLore";
import { getPokemonDetails } from "../hooks/getPokemonsDetails";
import { lorePokemon } from "../hooks/getLorePokemon";
import { useParams } from "react-router-dom";

import { Grid, Box, Paper } from "@mui/material/";

interface PokemonDetailesProps {}

export const PokemonDetailes: React.FC<PokemonDetailesProps> = () => {
    const [selectedPokemonDetails, setSelectedPokemonDetail] = useState<
        PokemonDetails | undefined
    >(undefined);
    const [data, setData] = useState<PokemonLore | null>(null);

    const { name } = useParams();

    const ids = selectedPokemonDetails?.id;
    const id = ids?.toString();
    useEffect(() => {
        if (!id) return;
        lorePokemon(id).then((resp) => setData(resp));
    }, [id]);

    useEffect(() => {
        if (!name) return;
        getPokemonDetails(name).then((resp) => setSelectedPokemonDetail(resp));
    }, [name]);

    return (
        <Box
            mt={2}
            sx={{
                display: "flex",
                flexDirection: "row-reverse",
                flexWrap: "wrap-reverse",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <div>
                <img
                    src={
                        selectedPokemonDetails?.sprites.other?.[
                            "official-artwork"
                        ].front_default
                    }
                    alt=""
                />
                <ul>
                    {selectedPokemonDetails?.stats.map((base) => {
                        return (
                            <li key={base.stat.name}>
                                <span>{base.stat.name}</span>
                                <span>{base.base_stat}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <h2>{name} </h2>
                <p>{data?.flavor_text_entries[0].flavor_text}</p>
            </div>
        </Box>
    );
};

export default PokemonDetailes;
