import { extendTheme } from "@chakra-ui/react";

const colors = {
    // brand: {
    //     900: "#1a365d",
    //     800: "#153e75",
    //     700: "#2a69ac",
    // },
    variants: {
        "without-shadow": {
            bg: "transparent",
            boxShadow: "0 0 2px 2px transparent",
        },
    },
};

const theme = extendTheme({ colors });

export default theme;
