import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import Container from "@mui/material/Container";

function App() {
    return (
        <>
            <Container>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </Container>
        </>
    );
}

export default App;
