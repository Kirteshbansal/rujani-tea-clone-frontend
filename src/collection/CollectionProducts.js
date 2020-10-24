import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/core";

import { fetchProductsByCollection } from "./collectionSlice";

class CollectionProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      productId: "",
    };
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

  showOtherImage = (id) => {
    const { products } = this.props.collection;
    const img = products
      .filter((p) => {
        if (id === p.id) {
          return p;
        }
        return null;
      })
      .map((p) => p.url1.split(",")[5]);
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
    const { collection } = this.props;
    const { products } = collection;
    const product =
      products === undefined
        ? null
        : products.map((product) => {
            const image = product.url2.split(",")[5];
            return (
              <Box mx="2%" my={5} key={product.id} w="21%">
                <Link to={`/product/${product.id}`}>
                  <Stack textAlign="center">
                    <Image
                      src={
                        this.state.productId &&
                        this.state.productId === product.id
                          ? this.state.img
                          : image
                      }
                      w="100%"
                      onMouseEnter={() => this.showOtherImage(product.id)}
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
            {collection.categoryName}
          </Heading>
          <Flex flexWrap="wrap" justifyContent="flex-start" px={16}>
            {product}
          </Flex>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collection: { ...state.collectionProducts.collectionProducts },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsByCollection: (id) => dispatch(fetchProductsByCollection(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionProducts);
