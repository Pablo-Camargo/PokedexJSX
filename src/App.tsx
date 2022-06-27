import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import NavBar from "./components/NavBar";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Container>
                    <Box mt={2}>
                        <AppRoutes />
                    </Box>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
