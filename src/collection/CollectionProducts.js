import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image, Stack, Text, Skeleton } from "@chakra-ui/react";

import { fetchProductsByCollection } from "./collectionSlice";
import Layout from "../components/Layout/Layout";
import ProductCard from "../products/productCards/ProductCard";
import LoadingProductCard from "../products/productCards/LoadingProductCard";
import SkeletonComp from "../components/Common/SkeletonComp";
class CollectionProducts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProductsByCollection(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchProductsByCollection(this.props.match.params.id);
            return this.props.match.params.id !== prevProps.match.params.id;
        }
        return this.props.match.params.id !== prevProps.match.params.id;
    }

    render() {
        const { collection } = this.props;
        const { products } = collection;
        const productsList =
            products === undefined
                ? null
                : products.map((product) => (
                      <ProductCard
                          productData={product}
                          loading={this.props.loading}
                          key={product.product_id}
                          mx={{ sm: "0.25em", md: "1.5%", lg: "2%" }}
                      />
                  ));
        return (
            <>
                <Layout showHeader={true} showFooter={true} errorBoundary={true}>
                    <Box
                        backgroundColor="#efefef"
                        py={55}
                        minH={{
                            base: "calc(100vh - 100px)",
                            md: "calc(100vh - 130px)",
                            lg: "calc(100vh - 150px)",
                        }}
                    >
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
                            {this.props.loading ? null : collection.categoryName}
                        </Heading>
                        <Flex flexWrap="wrap" justifyContent={{ base: "space-evenly", md: "center" }}>
                            {this.props.loading ? <SkeletonComp /> : productsList}
                        </Flex>
                    </Box>
                </Layout>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collection: { ...state.collectionProducts.collectionProducts },
        loading: state.collectionProducts.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsByCollection: (id) => dispatch(fetchProductsByCollection(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionProducts);
