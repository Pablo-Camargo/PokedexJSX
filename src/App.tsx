import React, { useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import GlobalStyles from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <NavBar toggleTheme={toggleTheme} />

                <AppRoutes />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
