import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store, persistor } from "./store";
import theme from "./public/theme/theme";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
