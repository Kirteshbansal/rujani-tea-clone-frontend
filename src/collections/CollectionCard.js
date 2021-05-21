import React, { Component } from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import routes from "../routes/routes";
class CollectionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { cardData } = this.props;
        const pathToRedirect = routes.category.replace(":id", cardData?.id);
        return (
            <>
                <Box
                    py={15}
                    px={{ base: "20px", md: "15px" }}
                    w={{ base: "100%", md: "49%", xl: "33.33%" }}
                    h={{ base: "530px", xl: "610px" }}
                    borderRadius="0.25em"
                >
                    <Box
                        background={`linear-gradient(to top, rgba(4,4,4,0.65), rgba(54,54,54,0.2)), url(${cardData.image})`}
                        backgroundPosition="center"
                        w={{ base: "100%" }}
                        h={{ base: "100%" }}
                        borderRadius="0.25em"
                        backgroundRepeat="no-repeat"
                        backgroundSize={{ base: "210%", md: "200%", lg: "220%", "2xl": "185%" }}
                        boxShadow="0 0 2px #666"
                        className="collection-card"
                    >
                        <Stack
                            position="relative"
                            top={{ base: "76%", md: "74%", lg: "72%", xl: "73.5%" }}
                            left={{ base: "7%", md: "9%" }}
                            w="fit-content"
                        >
                            <Heading
                                as="h2"
                                w="fit-content"
                                color="white"
                                fontSize={{ base: "20px", lg: "22px" }}
                                fontWeight="400"
                                letterSpacing={{ base: "2px", lg: "2.5px" }}
                                style={{ wordSpacing: "5px" }}
                                className="font-montserrat"
                                mb={{ base: "16px", lg: "30px" }}
                            >
                                {cardData.name}
                            </Heading>
                            <Link to={pathToRedirect} className="primary-btn button-lw">
                                VIEW PRODUCTS
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </>
        );
    }
}

export default CollectionCard;
