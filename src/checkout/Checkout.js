import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import { RiTruckLine, RiCheckboxCircleFill } from "react-icons/ri";
import { connect } from "react-redux";

import CheckoutItems from "./CheckoutItems";
import { manageAddress } from "../auth/authSlice";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { addr1: "", addr2: "", city: "", state: "", zip: null };
  }

  handleAddr1 = (e) => this.setState({ addr1: e.target.value });
  handleAddr2 = (e) => this.setState({ addr2: e.target.value });
  handleCity = (e) => this.setState({ city: e.target.value });
  handleState = (e) => this.setState({ state: e.target.value });
  handleZip = (e) =>
    this.setState({ zip: e.target.value }, () => console.log(this.state));

  handleAddress = async (e) => {
    try {
      e.preventDefault();
      const { user } = this.props;
      const { id } = user;
      const addr = {
        id: id,
        addr1:
          this.state.addr1.length > 0 ? this.state.addr1 : user.address.addr1,
        addr2:
          this.state.addr2.length > 0 ? this.state.addr2 : user.address.addr2,
        city: this.state.city.length > 0 ? this.state.city : user.address.city,
        state:
          this.state.state.length > 0 ? this.state.state : user.address.state,
        zip: this.state.zip !== null ? this.state.zip : user.address.zip,
      };
      await this.props.manageAddress(addr);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { user } = this.props;
    return (
      <>
        <Flex justifyContent="center" boxShadow="sm">
          <Box w="50%" pl={30} py={45} bg="#fafafa">
            <Stack ml="18%" flexDirection="column" pl={35} pr={20}>
              <Heading
                as="h1"
                fontSize={26}
                fontWeight="400"
                alignSelf="center"
              >
                <Link to="/">Rujani tea India</Link>
              </Heading>
              <Heading
                as="h2"
                fontSize={19}
                color="#444444"
                fontWeight="400"
                mt={35}
              >
                Contact information
              </Heading>
              <Flex alignItems="center" mt={4}>
                <Image
                  src="https://i.postimg.cc/V67c02c3/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dq-KEPf-X7h-Pbc6-SMVUCte-ANKwj.jpg"
                  w={16}
                  h={16}
                  rounded="50%"
                  mr={5}
                />
                <Box>
                  <Text>
                    Name: {user.firstName} {user.lastName}
                  </Text>
                  <Text>Email: {user.email}</Text>
                </Box>
              </Flex>
              <Heading
                as="h2"
                fontSize={19}
                color="#444444"
                fontWeight="400"
                mt={35}
              >
                Delivery method
              </Heading>
              <Flex
                alignItems="center"
                mt={2}
                border="1px"
                borderColor="#ccc"
                p={2}
              >
                <Icon
                  as={RiCheckboxCircleFill}
                  size={6}
                  color="var(--nero-black)"
                  mr={5}
                />
                <Text color="var(--nero-black)" mr={2} fontWeight="500">
                  Ship
                </Text>
                <Icon as={RiTruckLine} size={6} color="var(--nero-black)" />
              </Flex>
              <Heading
                as="h2"
                fontSize={19}
                color="#444444"
                fontWeight="400"
                mt={35}
              >
                Shipping address
              </Heading>
              <Stack spacing={4} mt={3}>
                <Stack isInline spacing={4}>
                  <FormControl display="flex" w="50%" alignItems="center">
                    <FormLabel htmlFor="firstName" fontSize={14} w="38%">
                      First Name:
                    </FormLabel>
                    <Input
                      type="text"
                      id="firstName"
                      isRequired
                      rounded={0}
                      bg="transparent"
                      defaultValue={user.firstName}
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                    />
                  </FormControl>
                  <FormControl display="flex" w="50%" alignItems="center">
                    <FormLabel htmlFor="lastName" fontSize={14} w="38%">
                      Last Name:
                    </FormLabel>
                    <Input
                      type="text"
                      id="lastName"
                      isRequired
                      defaultValue={user.lastName}
                      rounded={0}
                      bg="transparent"
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack spacing={4}>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="addr1" fontSize={14} w="20%">
                      Address line 1:
                    </FormLabel>
                    <Input
                      type="text"
                      id="addr1"
                      isRequired
                      rounded={0}
                      bg="transparent"
                      defaultValue={user.address.addr1}
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      onChange={this.handleAddr1}
                    />
                  </FormControl>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="addr2" fontSize={14} w="20%">
                      Address line 2:
                    </FormLabel>
                    <Input
                      type="text"
                      id="addr2"
                      isRequired
                      rounded={0}
                      bg="transparent"
                      defaultValue={user.address.addr2}
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      onChange={this.handleAddr2}
                    />
                  </FormControl>
                </Stack>
                <Stack isInline spacing={4}>
                  <FormControl display="flex" alignItems="center" w="50%">
                    <FormLabel htmlFor="city" fontSize={14} w="20%">
                      City:
                    </FormLabel>
                    <Input
                      type="text"
                      id="city"
                      isRequired
                      rounded={0}
                      bg="transparent"
                      defaultValue={user.address.city}
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      onChange={this.handleCity}
                    />
                  </FormControl>
                  <FormControl display="flex" w="50%" alignItems="center">
                    <FormLabel htmlFor="state" fontSize={14} w="20%">
                      State:
                    </FormLabel>
                    <Input
                      type="text"
                      id="state"
                      isRequired
                      defaultValue={user.address.state}
                      rounded={0}
                      bg="transparent"
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      onChange={this.handleCity}
                    />
                  </FormControl>
                </Stack>
                <Stack isInline spacing={4}>
                  <FormControl display="flex" alignItems="center" w="50%">
                    <FormLabel htmlFor="country" fontSize={14} w="21%">
                      Country:
                    </FormLabel>
                    <Input
                      type="text"
                      id="country"
                      isRequired
                      rounded={0}
                      bg="transparent"
                      defaultValue="India"
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                    />
                  </FormControl>
                  <FormControl display="flex" w="50%" alignItems="center">
                    <FormLabel htmlFor="state" fontSize={14} w="30%">
                      Pin code:
                    </FormLabel>
                    <Input
                      type="number"
                      id="state"
                      isRequired
                      defaultValue={user.address.zip}
                      minLength="6"
                      maxLength="6"
                      rounded={0}
                      bg="transparent"
                      fontSize={15}
                      outline="none"
                      border="1px"
                      borderColor="#ccc"
                      _focus={{
                        outline: "none",
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      _hover={{
                        border: "1px",
                        borderColor: "var(--nero-black)",
                      }}
                      onChange={this.handleZip}
                    />
                  </FormControl>
                </Stack>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="phone" fontSize={14} w="24%">
                    Phone (optional):
                  </FormLabel>
                  <Input
                    type="tel"
                    id="phone"
                    maxLength={10}
                    isRequired
                    rounded={0}
                    bg="transparent"
                    placeholder="(optional)"
                    defaultValue={user.phone}
                    fontSize={15}
                    outline="none"
                    border="1px"
                    borderColor="#ccc"
                    _focus={{
                      outline: "none",
                      border: "1px",
                      borderColor: "var(--nero-black)",
                    }}
                    _hover={{
                      border: "1px",
                      borderColor: "var(--nero-black)",
                    }}
                  />
                </FormControl>
              </Stack>
              <Flex textAlign="center" mt={5} justifyContent="space-between">
                <Link to="/" color="var(--dim-gray)">
                  {"< "}Return to home
                </Link>
                <Stack>
                  <Button
                    variant="solid"
                    bg="var(--nero-black)"
                    rounded={0}
                    color="#fff"
                    border="1px solid var(--nero-black)"
                    fontSize={14}
                    fontWeight="400"
                    letterSpacing={2}
                    w="100%"
                    _hover={{
                      outline: "none",
                      bg: "transparent",
                      color: "var(--nero-black)",
                      border: "1px solid var(--nero-black)",
                    }}
                    _focus={{ outline: "none" }}
                    _active={{ bg: "transparent" }}
                    onClick={this.handleAddress}
                  >
                    Update address
                  </Button>
                  <Button
                    variant="solid"
                    bg="var(--nero-black)"
                    rounded={0}
                    color="#fff"
                    border="1px solid var(--nero-black)"
                    fontSize={14}
                    fontWeight="400"
                    letterSpacing={2}
                    w="100%"
                    mt={3}
                    _hover={{
                      outline: "none",
                      bg: "transparent",
                      color: "var(--nero-black)",
                      border: "1px solid var(--nero-black)",
                    }}
                    _focus={{ outline: "none" }}
                    _active={{ bg: "transparent" }}
                  >
                    Countinue to shopping
                  </Button>
                </Stack>
              </Flex>
            </Stack>
          </Box>
          <Box bg="#efefef" w="50%" pr={30} py={45}>
            <Stack mr="18%" px={20}>
              <CheckoutItems />
            </Stack>
          </Box>
        </Flex>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: { ...state.user.user },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // manageAddress: (addr, id) => dispatch(manageAddress(addr, id)),
    manageAddress: (addr) => dispatch(manageAddress(addr)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
