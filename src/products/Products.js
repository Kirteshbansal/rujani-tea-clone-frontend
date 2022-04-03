import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";

import { fetchProducts, sortProducts } from "./productsSlice";
import { Box, Flex, Heading, Image, Stack, Text, Select, Skeleton } from "@chakra-ui/react";
import LoadingProductCard from "./productCards/LoadingProductCard";
import ProductCard from "./productCards/ProductCard";
import Layout from "../components/Layout/Layout";

const Products = (props) => {
    useEffect(() => {
        if (Object.keys(props.products).length === 0) {
            props.fetchProducts();
        }
    }, [props]);

    const selectSortOption = (e) => {
        const selectedOption = e.target.value;
        props.sortProducts(selectedOption);
    };

    const { products } = props;
    const productsList = products.map((product) => {
        return <ProductCard productData={product} loading={props.loading} key={product.product_id} />;
    });
    return (
        <>
            <Layout showHeader={true} showFooter={true} errorBoundary={true}>
                <Box backgroundColor="#efefef" py={55}>
                    <Heading
                        as="h2"
                        fontWeight="400"
                        textAlign="center"
                        className="font-montserrat"
                        letterSpacing={3}
                        fontSize={{ base: "1.375em", md: "1.5em" }}
                        mb={{ base: "1.5em", md: "2em" }}
                        color="var(--nero-black)"
                    >
                        ALL PRODUCTS
                    </Heading>
                    <Flex flexWrap="wrap" justifyContent="space-evenly">
                        {props.loading
                            ? new Array(16).fill(null).map((product, index) => <LoadingProductCard key={index + 1} />)
                            : productsList.length > 0 && productsList}
                    </Flex>
                    <Flex
                        boxShadow="1px 1px #cfcfcf, -1px -1px #cfcfcf"
                        justifyContent={{ base: "center", md: "flex-end" }}
                        px={2}
                        mt={6}
                        alignItems="center"
                        position="sticky"
                        bottom={0}
                        bg="#efefef"
                        h={{ base: "2.5em", md: "3em" }}
                    >
                        <Text
                            mr="0.5em"
                            pr="0.6em"
                            borderRight="1.2px solid #666"
                            fontSize={{ base: "1.125em", md: "1.3215em" }}
                            fontWeight="500"
                            lineHeight={{ base: 1.8 }}
                            my={{ base: "", md: "0.3125em" }}
                        >
                            SORT
                        </Text>
                        <Select
                            variant="unstyled"
                            w={{ base: "max-content" }}
                            p="0"
                            my={{ base: "", md: "0.3125em" }}
                            defaultValue={props.sortOption}
                            onChange={selectSortOption}
                            fontSize={{ base: "0.875em", md: "1em" }}
                        >
                            <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
                            <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
                            <option value="Price, low to high">Price, low to high</option>
                            <option value="Price, high to low">Price, high to low</option>
                        </Select>
                    </Flex>
                </Box>
            </Layout>
        </>
    );
};

const sortOptions = {
    a_desc: "Alphabetically, Z-A",
    p_asc: "Price, low to high",
    p_desc: "Price, high to low",
};

const getProducts = (state) => state.products.products;
const getSelectedSort = (state) => state.products.sortOption;

const getSortedProducts = createSelector([getProducts, getSelectedSort], (products, sortOption) => {
    const productsInstance = [...products];
    switch (sortOption) {
        case sortOptions.a_desc:
            return productsInstance.reverse();
        case sortOptions.p_asc:
            return productsInstance.sort((a, b) => a.price - b.price);
        case sortOptions.p_desc:
            return productsInstance.sort((a, b) => b.price - a.price);
        default:
            return productsInstance;
    }
});

const mapStateToProps = (state) => {
    return {
        products: getSortedProducts(state),
        sortOption: state.products.sortOption,
        loading: state.products.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        sortProducts: (selectedOption) => dispatch(sortProducts(selectedOption)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
