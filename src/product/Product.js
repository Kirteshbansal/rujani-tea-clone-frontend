import React, { useState, useEffect } from "react";
import {
    Text,
    Flex,
    Heading,
    Stack,
    Img,
    Divider,
    Icon,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Box,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import Slider from "react-slick";

import { fetchProduct } from "./productSlice";
import { addProductToCart } from "../cart/cartSlice";
import Layout from "../components/Layout/Layout";

const Product = (props) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    useEffect(() => {
        props.fetchProduct(props.match.params.id);
    }, [props.match.params.id]);

    const { product } = props;

    const handleProductQuantity = (quantity) => {
        const selectedQuantity = quantity;
        setSelectedQuantity(+selectedQuantity);
    };

    const handleAddToCart = (productDetails) => {
        const { id, name, price, url2 } = productDetails;
        const image = url2.split(",")[0];
        const product = { id, name, price, selectedQuantity, image };
        props.addProductToCart(product);
        setSelectedQuantity(1);
    };

    let settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: false,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 5000,
        cssEase: "ease",
        swipeToSlide: true,
        pauseOnHover: true,
        arrows: false,
        vertical: false,
        verticalSwiping: false,
        className: "product-imgs-slider",
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             vertical: true,
        //             verticalSwiping: true,
        //         },
        //     },
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2,
        //         initialSlide: 2,
        //     },
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //     },
        // },
        // ],
    };

    let { url1, url2, desc } = product;
    url1 = url1 !== undefined ? url1.split(",")[1] : "";
    url2 = url2 !== undefined ? url2.split(",")[1] : "";
    desc = desc !== undefined ? desc.split("\n") : [];
    const content =
        desc !== undefined
            ? desc.map((d, i) => (
                  <Text key={i} fontSize={13} fontWeight="300" letterSpacing={1} lineHeight="2">
                      {d}
                  </Text>
              ))
            : "";
    const productJsx = (
        <Flex justifyContent="center" flexDir={{ base: "column", lg: "row" }}>
            {/* <Stack w={{ base: "100%", lg: "46%" }} pr={2} maxW={{ base: "100%" }}> */}
            {/* <Slider {...settings}>
                <Box w={{ base: "100%" }} pr={2} maxW={{ base: "100%" }}>
                    <Img src={url2} />
                </Box>
                <Box w={{ base: "100%" }} pr={2} maxW={{ base: "100%" }}>
                    <Img src={url1} />
                </Box>
            </Slider> */}
            {/* </Stack> */}
            <Stack w={{ base: "100%", lg: "22%" }} ml={{ lg: "5%%" }}>
                <Text fontSize={13} fontWeight="500" letterSpacing={2}>
                    RUJANITEA.COM
                </Text>
                <Heading as="h2" fontSize={22} letterSpacing={3} fontWeight="500" textTransform="uppercase" mt={4}>
                    {product.name}
                </Heading>
                <Text fontSize={16} fontWeight="400" letterSpacing={2} color="var(--dim-gray)" mt={4}>
                    RS. {product.price}
                </Text>
                <Divider borderColor="#ccc" mt={4} />
                <br /> {content}
                <Text mt={4} fontStyle="italic" fontSize={14} fontWeight="400">
                    <span style={{ fontWeight: "bold" }}>Tasting Notes: </span>
                    {product.taste}
                </Text>
                <Text mt={4} fontStyle="italic" fontSize={14} fontWeight="400">
                    <span style={{ fontWeight: "bold" }}>Recommended time of day: </span>
                    {product.recommendedTime}
                </Text>
                <Stack mt={4} color="var(--dim-gray)">
                    <Text fontSize={13} fontWeight="400" letterSpacing={2}>
                        SHARE
                    </Text>
                    <Flex mt={2}>
                        <Icon as={RiFacebookFill} size={5} mr={4}></Icon>
                        <Icon as={RiInstagramLine} size={5}></Icon>
                    </Flex>
                </Stack>
                <Text fontSize={13} fontWeight="400" letterSpacing={2} mt={4}>
                    Weight:
                </Text>
                <Text
                    fontSize={12}
                    fontWeight="400"
                    letterSpacing={2}
                    w="max-content"
                    border="1px solid var(--nero-black)"
                    px={3}
                    py={2}
                    mt={2}
                >
                    100 grams
                </Text>
                <Text mt={4} fontStyle="italic" fontSize={16}>
                    <span style={{ fontWeight: "bold" }}>Stock: </span>
                    {product.stock > 0 ? "In stock" : "Sold out"}
                </Text>
                <Text fontSize={13} fontWeight="400" letterSpacing={2} mt={4}>
                    Quantity:
                </Text>
                <NumberInput
                    size="sm"
                    value={selectedQuantity}
                    min={1}
                    step={1}
                    w="5.75em"
                    border="1px solid var(--nero-black)"
                    onChange={handleProductQuantity}
                >
                    <NumberInputField
                        bg="transparent"
                        maxLength="3"
                        border="none"
                        _focus={{
                            outline: "none",
                        }}
                    />
                    <NumberInputStepper zIndex={0}>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Button
                    variant="solid"
                    bg="var(--nero-black)"
                    rounded={0}
                    mt={17}
                    color="#fff"
                    border="1px solid var(--nero-black)"
                    fontSize={14}
                    fontWeight="400"
                    letterSpacing={2}
                    verticalAlign="middle"
                    px={8}
                    _hover={{
                        outline: "none",
                        bg: "transparent",
                        color: "var(--nero-black)",
                        border: "1px solid var(--nero-black)",
                    }}
                    _focus={{ outline: "none" }}
                    _active={{ bg: "transparent" }}
                    onClick={() => handleAddToCart(product)}
                >
                    ADD TO CART - RS. {product.price}
                </Button>
            </Stack>
        </Flex>
    );
    return (
        <Layout showHeader={true} showFooter={true} errorBoundary={true}>
            <Flex px="8%" py="3%" backgroundColor="#efefef" justifyContent="center">
                {props.loading ? <h1>Loading...</h1> : productJsx}
            </Flex>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        product: { ...state.product.product },
        loading: state.product.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProduct: (id) => dispatch(fetchProduct(id)),
        addProductToCart: (product) => dispatch(addProductToCart(product)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
