import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts } from "./productsSlice";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/core";

class Category extends Component {
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

  render() {
    const { products } = this.props;
    const product = products.map((product) => {
      const image = product.media[1].url.split(",")[5];
      return (
        <Box mx={7} my={5} key={product.product_id} w="21%">
          <Link to={`product/${product.product_id}`}>
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
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: [...state.products.products],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
