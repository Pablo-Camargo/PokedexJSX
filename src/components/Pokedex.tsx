import React, { useEffect, useState } from "react";
import { listPokemon } from "../hooks/useFetch";
import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";

import {
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    Grid,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import CardMedia from "@mui/material/CardMedia";

interface PokedexProps {}
export const Pokedex: React.FC<PokedexProps> = () => {
    const [data, setData] = useState<PokemonDetails[]>([]);

    const history = useNavigate();

    useEffect(() => {
        listPokemon().then((resp) => setData(resp.results));
    }, []);

    function hendleClick(name: string) {
        history(`/pokemon/${name}`);
    }

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
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
                                <div className="card-pok">
                                    <CardContent>
                                        <CardMedia
                                            width="55%"
                                            component="img"
                                            height="100%"
                                            image={
                                                poke.sprites.other?.[
                                                    "official-artwork"
                                                ].front_default
                                            }
                                            alt={poke.name}
                                        />

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
                                                        className={
                                                            type.type.name
                                                        }
                                                        label={type.type.name}
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
    );
};
export default Pokedex;
