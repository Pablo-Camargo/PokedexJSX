import { Routes, Route } from "react-router-dom";

import Pokedex from "../components/Pokedex/Pokedex";
import PokemonDetailes from "../components/PokemonDetailes/PokemonDetailes";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/pokemon/:name" element={<PokemonDetailes />} />
        </Routes>
    );
};

export default AppRoutes;
