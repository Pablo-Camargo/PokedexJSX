import React, { useEffect, useState } from "react";
import { listPokemon } from "../hooks/useFetch";
import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

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
                                <div className="">
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
                                    </CardContent>
                                </div>
                                <CardContent>
                                    <Stack direction="row" spacing={1}>
                                        {poke.types.map((type) => {
                                            return (
                                                <Chip
                                                    className={type.type.name}
                                                    label={type.type.name}
                                                />
                                            );
                                        })}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </div>
                    </Grid>
                );
            })}
        </Grid>
    );
};
export default Pokedex;
