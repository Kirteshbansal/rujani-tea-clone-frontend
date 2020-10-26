import React, { Component } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Icon,
  Flex,
  Box,
  Image,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { RiTruckLine } from "react-icons/ri";

import { changeItemQuantity, removeProduct } from "./cartSlice";

class CartDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleProductQuantity = (id, selectedQuantity) => {
    const product = { id, selectedQuantity };
    this.props.changeItemQuantity(product);
  };

  handleRemoveProduct = (id) => {
    this.props.removeProduct(id);
  };

  render() {
    const { isOpen, onClose, cartProducts } = this.props;
    const totalCost = cartProducts.reduce((acc, crr) => {
      return (acc += crr.selectedQuantity * crr.price);
    }, 0);
    const cartItem = cartProducts.map((product) => {
      return (
        <Flex alignItems="center" mb={5} key={product.id}>
          <Box w="34%" mr={4}>
            <Image src={product.image} />
          </Box>
          <Stack w="60%">
            <Text
              className="font-montserrat"
              fontSize={15}
              fontWeight="500"
              letterSpacing={2}
              textTransform="uppercase"
            >
              {product.name}
            </Text>
            <Text
              fontSize={12}
              fontWeight="300"
              letterSpacing={2}
              color="var(--dim-gray)"
            >
              100 GRAMS
            </Text>
            <Text
              fontSize={12}
              fontWeight="300"
              letterSpacing={2}
              color="var(--dim-gray)"
            >
              RS. {product.price}
            </Text>
            <Flex justifyContent="space-between" alignItems="flex-end">
              <NumberInput
                size="sm"
                defaultValue={product.selectedQuantity}
                min={1}
                step={1}
                w={80}
                border="1px solid var(--nero-black)"
                onChange={(value) =>
                  this.handleProductQuantity(product.id, value)
                }
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
                variant="link"
                bg="transparent"
                _focus={{ outline: "none" }}
                fontWeight="300"
                color="var(--dim-gray)"
                onClick={() => this.handleRemoveProduct(product.id)}
              >
                Remove
              </Button>
            </Flex>
          </Stack>
        </Flex>
      );
    });
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size="sm"
          isFullHeight={true}
        >
          <DrawerOverlay />
          <DrawerContent background="linear-gradient(to bottom, #efefef ,#f2f2f2)">
            <DrawerCloseButton _focus={{ outline: "none" }} my={3} mr={2} />
            <DrawerHeader my={2} letterSpacing={2} fontSize={18}>
              CART
            </DrawerHeader>
            <Text
              pl={6}
              py={2}
              borderY="1px solid #ccc"
              color="var(--dim-gray)"
              fontSize={14}
              letterSpacing={2}
              fontWeight="300"
              mb={3}
            >
              Get free shipping!...
              <Icon as={RiTruckLine} size={6} />
            </Text>
            <DrawerBody overflowY="auto">
              {cartProducts.length > 0 ? cartItem : "Your cart is empty."}
            </DrawerBody>
            <DrawerFooter
              px={8}
              py={6}
              borderTop="1px solid #ccc"
              display="flex"
              flexDirection="column"
            >
              <Text
                mb={4}
                fontSize={14}
                color="var(--dim-gray)"
                fontWeight="200"
              >
                Inclusive of all shipping & taxes.
              </Text>
              <Button
                variant="solid"
                bg="var(--nero-black)"
                rounded={0}
                color="#fff"
                border="1px solid var(--nero-black)"
                fontSize={15}
                fontWeight="400"
                letterSpacing={2}
                w="100%"
                py={6}
                _hover={{
                  outline: "none",
                  bg: "transparent",
                  color: "var(--nero-black)",
                  border: "1px solid var(--nero-black)",
                }}
                _focus={{ outline: "none" }}
                _active={{ bg: "transparent" }}
              >
                CHECKOUT - RS. {totalCost}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: [...state.cart.cartProducts],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeItemQuantity: (product) => dispatch(changeItemQuantity(product)),
    removeProduct: (id) => dispatch(removeProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDrawer);
