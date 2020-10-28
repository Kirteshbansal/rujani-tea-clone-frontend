import React, { Component } from "react";
import { connect } from "react-redux";
import { Flex, Image, Stack, Text, Divider } from "@chakra-ui/core";

class CheckoutItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { checkoutItems } = this.props;
    const totalCost = checkoutItems.reduce((acc, crr) => {
      return (acc += crr.selectedQuantity * crr.price);
    }, 0);
    const checkoutItem = checkoutItems.map((item) => {
      return (
        <Flex justifyContent="space-between" alignItems="flex-end" w="70%">
          <Flex>
            <Flex
              alignItems="center"
              w={80}
              h={80}
              bg="white"
              rounded={4}
              boxShadow="md"
              mr={5}
            >
              <Image src={item.image} />
            </Flex>
            <Stack justifyContent="center">
              <Text
                fontSize={16}
                fontWeight="md"
                marginBottom="1px"
                color="var(--dim-gray)"
              >
                {item.name}
              </Text>
              <Text
                fontSize={13}
                fontWeight="sm"
                marginBottom="1px"
                color="var(--dim-gray)"
              >
                Weight: 100 GRAMS
              </Text>
              <Text
                fontSize={13}
                fontWeight="sm"
                marginBottom="1px"
                color="var(--dim-gray)"
              >
                Quantity: {item.selectedQuantity}
              </Text>
            </Stack>
          </Flex>
          <Text color="var(--dim-gray)">
            RS. {(item.selectedQuantity * item.price).toFixed(2)}
          </Text>
        </Flex>
      );
    });
    return (
      <>
        <Stack spacing={4}>{checkoutItem}</Stack>
        <Divider w="70%" bg="#ccc" my={5} />
        <Text
          mb={4}
          fontSize={14}
          color="var(--dim-gray)"
          fontWeight="200"
          alignSelf="flex-end"
          w="60%"
          mr={5}
        >
          *Inclusive of all shipping & taxes.
        </Text>
        <Flex justifyContent="space-between" w="70%" alignItems="center">
          <Text fontSize={22} color="var(--nero-black)" fontWeight="300">
            Total:{" "}
          </Text>
          <Text fontSize={24} color="var(--nero-black)" fontWeight="400">
            {totalCost.toFixed(2)}
          </Text>
        </Flex>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkoutItems: [...state.cart.cartProducts],
  };
};

export default connect(mapStateToProps)(CheckoutItems);
