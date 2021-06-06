import React, { Component } from "react";
import { Heading, Image, Flex } from "@chakra-ui/react";

import OopsImage from "../../public/dist/sad.svg";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("componentDidCatch error :>> ", error);
        console.log("componentDidCatch errorInfo :>> ", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Flex justifyContent="center" alignItems="center" h="100vh" minH="568px" px={"1em"} flexDir="column">
                    <Image src={OopsImage} w="80%" maxW="300px" />
                    <Heading
                        as="h1"
                        color="var(--charcoal)"
                        fontSize={{ base: "1.35em", md: "2em" }}
                        mt="2em"
                        align="center"
                    >
                        Oops! Something went wrong.
                    </Heading>
                    <Heading
                        as="h4"
                        color="var(--charcoal)"
                        fontSize={{ base: "1.15em", md: "1.5em" }}
                        mt="1em"
                        align="center"
                    >
                        Please try again in sometime...
                    </Heading>
                </Flex>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
