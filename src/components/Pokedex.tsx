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
    Stack,
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
                rowSpacing={3}
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
            >
                {data?.map((poke) => {
                    const pokeTypes: string[] = poke.types.map((type) => {
                        return type.type.name;
                    });
                    var primeiro = pokeTypes[0];

                    return (
                        <Grid item xs={4}>
                            <div>
                                <Card
                                    className={`${primeiro}` + "-bg"}
                                    key={poke.name}
                                    onClick={() => hendleClick(poke.name)}
                                >
                                    <div className="card-pok poke ">
                                        <CardContent>
                                            <div className="">
                                                <span>{poke.id}</span>
                                                <div className="absolute">
                                                    <CardMedia
                                                        className="img-fund"
                                                        alt=""
                                                        component="img"
                                                    />
                                                </div>

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
                                                component="div"
                                            >
                                                {poke.name}
                                            </Typography>
                                            <Stack direction="row" spacing={1}>
                                                {poke.types.map((type) => {
                                                    return (
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
                                                                type.type.name
                                                            }
                                                            label={
                                                                type.type.name
                                                            }
                                                        />
                                                    );
                                                })}
                                            </Stack>
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
