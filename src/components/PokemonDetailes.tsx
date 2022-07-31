import React, { useEffect, useState } from "react";

import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";
import { PokemonLore } from "../hooks/interfaces/PokemonLore";
import { getPokemonDetails } from "../hooks/getPokemonsDetails";
import { lorePokemon } from "../hooks/getLorePokemon";
import { useParams } from "react-router-dom";

import { Chip, Stack, Card, CardMedia, CardContent, Box } from "@mui/material/";

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
    const pokeTypes: string[] | undefined = selectedPokemonDetails?.types.map(
        (type) => {
            return type.type.name;
        }
    );

    let frist = pokeTypes?.[0];

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
            <Card className={`${frist}` + "-bg"}>
                <CardContent className="paddings">
                    <div className="poke-bola-back">
                        <CardMedia
                            width="50%"
                            component="img"
                            height="50%"
                            image={
                                selectedPokemonDetails?.sprites.other?.[
                                    "official-artwork"
                                ].front_default
                            }
                            sx={{
                                position: "relative",
                            }}
                            alt={selectedPokemonDetails?.name}
                        />
                    </div>

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
                </CardContent>
            </Card>
            <div>
                <h2>{name} </h2>
                <Stack direction="row" spacing={1}>
                    {selectedPokemonDetails?.types.map((types) => {
                        return (
                            <Chip
                                icon={
                                    <div
                                        className={
                                            "icon-" + `${types.type.name}`
                                        }
                                    ></div>
                                }
                                className={types.type.name}
                                label={types.type.name}
                            />
                        );
                    })}
                </Stack>
                <p>{data?.flavor_text_entries[0].flavor_text}</p>
                <ul>
                    <li>
                        <span>height</span>
                        {selectedPokemonDetails?.height}
                    </li>
                    <li>
                        <span>weight</span>
                        {selectedPokemonDetails?.weight}
                    </li>

                    <li>
                        <span>Abilits</span>
                        {selectedPokemonDetails?.abilities.map((a) => {
                            return a.ability.name;
                        })}
                    </li>
                </ul>
            </div>
        </Box>
    );
};

export default PokemonDetailes;
