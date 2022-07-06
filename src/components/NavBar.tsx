import React, { useState, ChangeEvent, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
} from "@mui/material/";
import { listAllPokemon } from "../hooks/getAllPokemons";
import { PokemonDetails } from "../hooks/interfaces/PokemonDetails";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
    const navLink = useNavigate();
    const [data, setData] = useState<PokemonDetails[]>([]);
    const [text, setText] = useState<string | null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    useEffect(() => {
        listAllPokemon().then((resp) => setData(resp.results));
    }, []);

    const buscaPoke = data?.filter((pokemon) =>
        pokemon.name.startsWith(text ? text : "")
    );

    function hendleClick(name: string) {
        navLink(`/pokemon/${name}`);
        console.log(name);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            type="text"
                            value={text}
                            onChange={handleChange}
                        />
                    </Search>
                    <ul>
                        {buscaPoke?.map((poke) => {
                            if (text === poke.name && text !== "") {
                                return (
                                    <li onClick={() => hendleClick(poke.name)}>
                                        {poke.name ? poke.name : ""}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
