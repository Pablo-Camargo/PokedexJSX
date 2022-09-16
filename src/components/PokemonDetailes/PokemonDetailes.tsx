import React, { useEffect, useState } from "react";

import { PokemonDetails } from "../../hooks/interfaces/PokemonDetails";
import { PokemonLore } from "../../hooks/interfaces/PokemonLore";
import { getPokemonDetails } from "../../hooks/getPokemonsDetails";
import { lorePokemon } from "../../hooks/getLorePokemon";
import { useParams } from "react-router-dom";

import {
    Chip,
    Stack,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Slider,
    List,
    ListItem,
    ListItemText,
    Box,
    Container,
} from "@mui/material/";

interface PokemonDetailesProps {}

export const PokemonDetailes: React.FC<PokemonDetailesProps> = () => {
    const [selectedPokemonDetails, setSelectedPokemonDetail] = useState<
        PokemonDetails | undefined
    >(undefined);
    const [data, setData] = useState<PokemonLore | null>(null);
    const [dataWeight, setWeight] = useState<number>(0);
    const [dataLbs, setLbs] = useState<number>(0);
    const [dataM, setM] = useState<number>(0);
    const [dataFt, setFt] = useState<string>("0");
    const [nome, setNome] = useState<string | undefined>(undefined);

    const { name } = useParams();

    const ids = selectedPokemonDetails?.id;
    const id = ids?.toString();
    const weight = selectedPokemonDetails?.weight;
    const height = selectedPokemonDetails?.height;

    useEffect(() => {
        if (!id) return;
        lorePokemon(id).then((resp) => setData(resp));
    }, [id]);

    useEffect(() => {
        if (!name) return;

        getPokemonDetails(name).then((resp) => setSelectedPokemonDetail(resp));
        const teste = name[0].toUpperCase() + name.slice(1).toLowerCase();
        setNome(teste);
    }, [name]);

    const pokeTypes: string[] | undefined = selectedPokemonDetails?.types.map(
        (type) => {
            return type.type.name;
        }
    );

    useEffect(() => {
        if (!weight) return;
        const reduWeight = weight;
        const convertQui = Number(reduWeight) / 10;
        return setWeight(convertQui);
    }, [weight]);

    useEffect(() => {
        if (!weight) return;
        const reduWeight = weight;
        const nearExact = Number(reduWeight) / 0.45359237;
        const lbs = Math.floor(nearExact);
        const convertLbs = lbs / 10;
        return setLbs(convertLbs);
    }, [weight]);

    useEffect(() => {
        if (!height) return;
        const reducerM = height;
        const convertM = Number(reducerM) / 10;
        return setM(convertM);
    }, [height]);

    useEffect(() => {
        if (!height) return;
        const heightN = height;
        const convertM = Number(heightN) / 10;
        const nearLbs = (Number(convertM) * 3.2808399).toFixed(2);
        return setFt(nearLbs);
    }, [height]);

    let frist: string | undefined = pokeTypes?.[0];
    const box = document.getElementById("bg-poke");
    if (box != null) {
        box.classList.remove(`${frist}` + "-root");
        box.classList.add(`${frist}` + "-root");
    }

    return (
        <div id={"bg-poke"}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        flexWrap: "wrap-reverse",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                    className={"justFi"}
                >
                    <Card className={"bg"}>
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

                            <div className="info-status">
                                <Typography
                                    sx={{ pt: 1.5 }}
                                    component="div"
                                    className=" "
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{ pt: 1.5 }}
                                        className="rowSpace"
                                    >
                                        {selectedPokemonDetails?.types.map(
                                            (types, index) => {
                                                return (
                                                    <Chip
                                                        key={index}
                                                        sx={{ width: "30%" }}
                                                        icon={
                                                            <div
                                                                className={
                                                                    "icon-" +
                                                                    `${types.type.name}`
                                                                }
                                                            ></div>
                                                        }
                                                        className={
                                                            types.type.name
                                                        }
                                                        label={types.type.name}
                                                    />
                                                );
                                            }
                                        )}
                                    </Stack>
                                </Typography>
                                {/*<Typography
                                    sx={{ mt: 1.5, mb: 1.5 }}
                                    color="text.secondary"
                                    component="div"
                                >
                                    {data?.flavor_text_entries[0].flavor_text}
                                </Typography>*/}

                                <List className="listFlex">
                                    <ListItem>
                                        <ListItemText className="listDetails">
                                            <span className="fontDetails">{`${dataM} M.`}</span>
                                            <span> {`${dataFt} Lbs.`}</span>
                                            <span className="fontDetailsSpan">
                                                height
                                            </span>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText className="listDetails">
                                            <span className="fontDetails">
                                                {" "}
                                                {` ${dataWeight} Kg.`}
                                            </span>
                                            <span>{`${dataLbs} Lbs.`}</span>
                                            <span className="fontDetailsSpan">
                                                weight
                                            </span>
                                        </ListItemText>
                                    </ListItem>

                                    {/*<ListItem>
                                        <ListItemText>
                                            <span>Abilits</span>
                                            {selectedPokemonDetails?.abilities.map(
                                                (a) => {
                                                    return a.ability.name;
                                                }
                                            )}
                                        </ListItemText>
                                            </ListItem>*/}
                                </List>
                                <List>
                                    {selectedPokemonDetails?.stats.map(
                                        (base, index) => {
                                            return (
                                                <ListItem
                                                    key={index}
                                                    className="list-test"
                                                >
                                                    <ListItemText className="testes">
                                                        <span>
                                                            {base.stat.name}:
                                                        </span>
                                                        <Slider
                                                            defaultValue={
                                                                base.base_stat
                                                            }
                                                            className={
                                                                `${frist}` +
                                                                "-color"
                                                            }
                                                            disabled
                                                            max={100}
                                                            sx={{
                                                                width: 300,
                                                                height: 10,
                                                            }}
                                                        />
                                                        <span>
                                                            {base.base_stat}
                                                        </span>
                                                    </ListItemText>
                                                </ListItem>
                                            );
                                        }
                                    )}
                                </List>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className={"bg"}>
                        <CardContent>
                            <Typography
                                variant="h1"
                                component="div"
                                sx={{ mb: 1.5 }}
                            >
                                {nome}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </div>
    );
};

export default PokemonDetailes;
