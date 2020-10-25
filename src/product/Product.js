import React, { Component } from "react";
import {
  Text,
  Flex,
  Heading,
  Spinner,
  Stack,
  Image,
  Divider,
  Icon,
  Button,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

import { fetchProduct } from "./productSlice";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchProduct(this.props.match.params.id);
    }
  }

  render() {
    const { product } = this.props;
    let { url1, url2, desc } = product;
    url1 = url1 !== undefined ? url1.split(",")[3] : "";
    url2 = url2 !== undefined ? url2.split(",")[3] : "";
    desc = desc !== undefined ? desc.split("\n") : [];
    const content =
      desc !== undefined
        ? desc.map((d, i) => (
            <Text
              key={i}
              fontSize={13}
              fontWeight="300"
              letterSpacing={1}
              lineHeight="2"
            >
              {d}
            </Text>
          ))
        : "";
    const productJsx = (
      <Flex justifyContent="center">
        <Stack w="46%" pr={2}>
          <Image src={url2} w="100%" />
          <Image src={url1} w="100%" mt="3.5%" />
        </Stack>
        <Stack w="22%" ml="5%">
          <Text fontSize={13} fontWeight="500" letterSpacing={2}>
            RUJANITEA.COM
          </Text>
          <Heading
            as="h2"
            fontSize={22}
            letterSpacing={3}
            fontWeight="500"
            textTransform="uppercase"
            mt={4}
          >
            {product.name}
          </Heading>
          <Text
            fontSize={16}
            fontWeight="400"
            letterSpacing={2}
            color="var(--dim-gray)"
            mt={4}
          >
            RS. {product.price}
          </Text>
          <Divider borderColor="#ccc" mt={4} />
          <br /> {content}
          <Text mt={4} fontStyle="italic" fontSize={14} fontWeight="400">
            <span style={{ fontWeight: "bold" }}>Tasting Notes: </span>
            {product.taste}
          </Text>
          <Text mt={4} fontStyle="italic" fontSize={14} fontWeight="400">
            <span style={{ fontWeight: "bold" }}>
              Recommended time of day:{" "}
            </span>
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
            w={102}
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
          >
            ADD TO CART - RS. {product.price}
          </Button>
        </Stack>
      </Flex>
    );
    return (
      <Flex px="8%" py="3%" backgroundColor="#efefef" justifyContent="center">
        {this.props.loading ? (
          <Spinner size="lg" alignSelf="center" />
        ) : (
          productJsx
        )}
      </Flex>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: { ...state.product.product },
    loading: state.product.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
