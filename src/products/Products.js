import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";

import { fetchProducts, sortProducts } from "./productsSlice";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Select,
} from "@chakra-ui/core";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      productId: "",
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  showOtherImage = (id) => {
    const { products } = this.props;
    const img = products
      .filter((p) => {
        if (id === p.product_id) {
          return p;
        }
        return null;
      })
      .map((p) => p.media[0].url.split(",")[5]);
    this.setState({
      img,
      productId: id,
    });
  };
  showMainImage = () => {
    this.setState({
      img: "",
      productId: "",
    });
  };

  selectSortOption = (e) => {
    const selectedOption = e.target.value;
    this.props.sortProducts(selectedOption);
  };

  render() {
    const { products } = this.props;
    const product = products.map((product) => {
      const image = product.media[1].url.split(",")[5];
      return (
        <Box mx={7} my={5} key={product.product_id} w="21%">
          <Link to={`/product/${product.product_id}`}>
            <Stack textAlign="center">
              <Image
                src={
                  this.state.productId &&
                  this.state.productId === product.product_id
                    ? this.state.img
                    : image
                }
                w="100%"
                onMouseEnter={() => this.showOtherImage(product.product_id)}
                onMouseLeave={this.showMainImage}
              />
              <Text
                className="font-montserrat"
                textTransform="uppercase"
                color="var(--nero-black)"
                letterSpacing={2}
                mt={6}
                mb={8}
                fontSize={14}
              >
                {product.name}
              </Text>
              <Text
                fontSize={13}
                color="var(--dim-gray)"
                letterSpacing={2}
                pb={5}
              >
                RS. {product.price}
              </Text>
            </Stack>
          </Link>
        </Box>
      );
    });
    return (
      <>
        <Box backgroundColor="#efefef" py={55}>
          <Heading
            as="h2"
            fontWeight="400"
            textAlign="center"
            className="font-montserrat"
            letterSpacing={3}
            fontSize={21}
            mb={10}
            color="var(--nero-black)"
          >
            ALL PRODUCTS
          </Heading>
          <Flex flexWrap="wrap" justifyContent="space-evenly">
            {product}
          </Flex>
          <Flex
            borderBottom="1.2px solid #666"
            borderTop="1.2px solid #666"
            justifyContent="flex-end"
            px={2}
            mt={6}
            alignItems="center"
          >
            <Text mr={5} fontSize={21} fontWeight="500">
              SORT
            </Text>
            <Select
              variant="unstyled"
              w="20%"
              borderLeft="1.2px solid #666"
              px={2}
              py={3}
              defaultValue={this.props.sortOption}
              onChange={this.selectSortOption}
            >
              <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
              <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
              <option value="Price, low to high">Price, low to high</option>
              <option value="Price, high to low">Price, high to low</option>
            </Select>
          </Flex>
        </Box>
      </>
    );
  }
}

const sortOptions = {
  a_desc: "Alphabetically, Z-A",
  p_asc: "Price, low to high",
  p_desc: "Price, high to low",
};

const getProducts = (state) => state.products.products;
const getSelectedSort = (state) => state.products.sortOption;

const getSortedProducts = createSelector(
  [getProducts, getSelectedSort],
  (products, sortOption) => {
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
  }
);

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
