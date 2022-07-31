import React, { useEffect, useState } from "react";
import { listPokemon } from "../hooks/useFetch";
import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";
import ButtonNext from "./ButtonNext";

import {
    Card,
    CardContent,
    Typography,
    Chip,
    Grid,
    CardMedia,
    IconButton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface PokedexProps {}
export const Pokedex: React.FC<PokedexProps> = () => {
    const [data, setData] = useState<PokemonDetails[]>([]);
    const [morePoke, setMorePoke] = useState(0);
    const loadMorePoke = () => {
        const limit = setMorePoke(morePoke + 20);
        return limit;
    };
    const history = useNavigate();
    useEffect(() => {
        listPokemon(morePoke.toString()).then((resp) => setData(resp.results));
    }, [morePoke]);
    function hendleClick(name: string) {
        history(`/pokemon/${name}`);
    }

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {data?.map((poke) => {
                    const pokeTypes: string[] = poke.types.map((type) => {
                        return type.type.name;
                    });
                    var primeiro = pokeTypes[0];

                    return (
                        <Grid item xs={2} sm={4} md={4}>
                            <div>
                                <Card
                                    className={`${primeiro}` + "-bg"}
                                    key={poke.name}
                                    onClick={() => hendleClick(poke.name)}
                                >
                                    <div className="card-pok poke ">
                                        <CardContent className="paddings">
                                            <div className="id-pokemon">
                                                <span>{poke.id}</span>
                                            </div>
                                            <div className="poke-bola-back">
                                                <CardMedia
                                                    width="55%"
                                                    component="img"
                                                    height="100%"
                                                    image={
                                                        poke.sprites.other?.[
                                                            "official-artwork"
                                                        ].front_default
                                                    }
                                                    sx={{
                                                        position: "relative",
                                                    }}
                                                    alt={poke.name}
                                                />
                                            </div>

                                            <Typography
                                                gutterBottom
                                                variant="h4"
                                                component="h4"
                                            >
                                                {poke.name[0].toUpperCase() +
                                                    poke.name.substring(1)}
                                            </Typography>

                                            <Grid
                                                container
                                                spacing={2}
                                                className="no-margings"
                                            >
                                                {poke.types.map((type) => {
                                                    return (
                                                        <Grid xs={6}>
                                                            <Chip
                                                                icon={
                                                                    <div
                                                                        className={
                                                                            "icon-" +
                                                                            `${type.type.name}`
                                                                        }
                                                                    ></div>
                                                                }
                                                                className={
                                                                    type.type
                                                                        .name
                                                                }
                                                                label={
                                                                    type.type
                                                                        .name
                                                                }
                                                            />
                                                        </Grid>
                                                    );
                                                })}
                                            </Grid>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
            <div>
                <ButtonNext
                    onClick={() => {
                        loadMorePoke();
                    }}
                />
            </div>
        </>
    );
};
export default Pokedex;
