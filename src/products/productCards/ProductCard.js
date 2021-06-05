import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Fade, Img, Text, Flex } from "@chakra-ui/react";
import { loadingImage } from "../../components/Common/Common";

const ProductCard = (props) => {
    const [showOnHover, setShowOnHover] = useState(false);
    const [imgLoad, setImgLoad] = useState(false);

    const {
        productData: { product_id, name, price, media },
        loading,
        w = { base: "45%", md: "30%", lg: "23%", xl: "21%" },
    } = props;
    const imageOnLoad = media[1].url.split(",")[1];
    const imageOnHover = media[0].url.split(",")[1];

    const showOtherImgHandler = () => {
        setShowOnHover(true);
    };

    const showDefaultImgHandler = () => {
        setShowOnHover(false);
    };
    return (
        <>
            <Box mb={{ base: "15px" }} w={w}>
                <Fade in={true}>
                    <Link to={`/product/${product_id}`}>
                        <Flex flexDir="column" textAlign="center" justifyContent="space-between">
                            <Img
                                src={!imgLoad ? loadingImage : showOnHover ? imageOnHover : imageOnLoad}
                                w="100%"
                                h="auto"
                                onMouseEnter={showOtherImgHandler}
                                onMouseLeave={showDefaultImgHandler}
                                onLoad={() => setImgLoad(true)}
                            />

                            <Text
                                className="font-montserrat"
                                textTransform="uppercase"
                                color="var(--nero-black)"
                                letterSpacing={2}
                                mt={{ base: "12px" }}
                                mb={{ base: "3px" }}
                                fontWeight={600}
                                fontSize={{ base: "12px" }}
                            >
                                {name}
                            </Text>
                            <Text fontSize={{ base: "12px" }} color="var(--dim-gray)" letterSpacing={2} pb={5}>
                                RS. {price}
                            </Text>
                        </Flex>
                    </Link>
                </Fade>
            </Box>
        </>
    );
};

export default React.memo(ProductCard);
