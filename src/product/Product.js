import React, { Component } from "react";
import {
  Text,
  Flex,
  Heading,
  Stack,
  Image,
  Divider,
  Icon,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Skeleton,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

import { fetchProduct } from "./productSlice";
import { addProductToCart } from "../cart/cartSlice";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuantity: 1,
    };
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetchProduct(this.props.match.params.id);
    }
  }

  handleProductQuantity = (quantity) => {
    const selectedQuantity = quantity;
    this.setState({
      selectedQuantity,
    });
  };

  handleAddToCart = (productDetails) => {
    const { id, name, price, url2 } = productDetails;
    const image = url2.split(",")[0];
    const { selectedQuantity } = this.state;
    const product = { id, name, price, selectedQuantity, image };
    this.props.addProductToCart(product);
    this.setState({
      selectedQuantity: 1,
    });
  };

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
          <Text fontSize={13} fontWeight="400" letterSpacing={2} mt={4}>
            Quantity:
          </Text>
          <NumberInput
            size="sm"
            value={this.state.selectedQuantity}
            min={1}
            step={1}
            w={80}
            border="1px solid var(--nero-black)"
            onChange={this.handleProductQuantity}
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
            onClick={() => this.handleAddToCart(product)}
          >
            ADD TO CART - RS. {product.price}
          </Button>
        </Stack>
      </Flex>
    );
    return (
      <Flex px="8%" py="3%" backgroundColor="#efefef" justifyContent="center">
        {this.props.loading ? (
          <Stack w="100%" justifyContent="center">
            <Skeleton
              height="20px"
              my="10px"
              colorStart="#f2f2f2"
              colorEnd="#555"
            />
            <Skeleton
              height="20px"
              my="10px"
              colorStart="#f2f2f2"
              colorEnd="#555"
            />
            <Skeleton
              height="20px"
              my="10px"
              colorStart="#f2f2f2"
              colorEnd="#555"
            />
          </Stack>
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
    addProductToCart: (product) => dispatch(addProductToCart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
