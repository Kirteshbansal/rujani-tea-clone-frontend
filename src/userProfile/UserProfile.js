import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Flex,
  Heading,
  Button,
  Text,
  Stack,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/core";

import { userLogout, manageAddress } from "../auth/authSlice";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      //   firstName: "",
      //   lastName: "",
      addr1: "",
      addr2: "",
      city: "",
      state: "",
      zip: null,
    };
  }

  onOpen = () => this.setState({ isOpen: true });
  onClose = () => this.setState({ isOpen: false });
  handleUserLogOut = () => {
    this.props.userLogout();
    this.props.history.push("/");
  };

  //   handleFirstName = (e) => this.setState({ firstName: e.target.value });
  //   handleLastName = (e) => this.setState({ lastName: e.target.value });
  handleAddr1 = (e) => this.setState({ addr1: e.target.value });
  handleAddr2 = (e) => this.setState({ addr2: e.target.value });
  handleCity = (e) => this.setState({ city: e.target.value });
  handleState = (e) => this.setState({ state: e.target.value });
  handleZip = (e) => this.setState({ zip: e.target.value });

  handleAddress = async (e) => {
    try {
      e.preventDefault();
      const { user } = this.props;
      const addr = {
        addr1:
          this.state.addr1.length > 0 ? this.state.addr1 : user.address.addr1,
        addr2:
          this.state.addr2.length > 0 ? this.state.addr2 : user.address.addr2,
        city: this.state.city.length > 0 ? this.state.city : user.address.city,
        state:
          this.state.state.length > 0 ? this.state.state : user.address.state,
        zip: this.state.zip !== null ? this.state.zip : user.address.zip,
      };
      await this.props.manageAddress(addr, user.id);
      this.onClose();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { user, loginSuccess } = this.props;
    return (
      <>
        <Stack bg="#efefef" px="15%" py="3%" jus>
          <Button
            variant="link"
            outline="none"
            bg="transparent"
            _hover={{
              backgroundColor: "transparent",
              outline: "none",
              color: "var(--nero-black)",
            }}
            _focus={{
              backgroundColor: "transparent",
              outline: "none",
            }}
            className="font-montserrat"
            letterSpacing={2}
            fontWeight="md"
            fontSize={12}
            w="6%"
            onClick={this.handleUserLogOut}
          >
            LOGOUT
          </Button>
          <Heading
            as="h2"
            fontSize={22}
            fontWeight="sm"
            letterSpacing={3}
            mt={17}
            className="font-montserrat"
            color="var(--nero-black)"
          >
            MY ACCOUNT
          </Heading>
          <Text
            mt={5}
            fontSize={13}
            letterSpacing={1}
            fontWeight="sm"
            color="var(--nero-black)"
          >
            Welcome back,
            {loginSuccess ? `${user.firstName} ${user.lastName}` : ""}!
          </Text>
          <Flex mt={55} justifyContent="space-between">
            <Stack w="63%">
              <Heading
                as="h4"
                fontSize={12}
                letterSpacing={1}
                fontWeight="sm"
                color="var(--dim-gray)"
              >
                MY ORDERS
              </Heading>
              <Box borderBottom="1px" borderBottomColor="#ccc" mt={3}></Box>
              <Text
                fontSize={12}
                letterSpacing={1}
                fontWeight="sm"
                color="var(--dim-gray)"
                mt={3}
              >
                You haven't placed any orders yet
              </Text>
            </Stack>
            <Stack w="30%">
              <Heading
                as="h4"
                fontSize={12}
                letterSpacing={1}
                fontWeight="sm"
                color="var(--dim-gray)"
              >
                ADDRESS
              </Heading>
              <Box borderBottom="1px" borderBottomColor="#ccc" mt={3}></Box>
              <Text
                fontSize={14}
                mt={3}
              >{`${user.firstName} ${user.lastName}`}</Text>
              <Text fontSize={14}>{`${user.address.addr1}`}</Text>
              <Text fontSize={14}>{`${user.address.addr2}`}</Text>
              <Text
                fontSize={14}
              >{`${user.address.city} ${user.address.state}`}</Text>
              <Text fontSize={14}>{`${user.address.zip}`}</Text>
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
                _hover={{
                  outline: "none",
                  bg: "transparent",
                  color: "var(--nero-black)",
                  border: "1px solid var(--nero-black)",
                }}
                _focus={{ outline: "none" }}
                _active={{ bg: "transparent" }}
                w="60%"
                onClick={this.onOpen}
              >
                MANAGE ADDRESS
              </Button>
            </Stack>
          </Flex>
          <Modal isOpen={this.state.isOpen} onClose={this.onClose} size="xl">
            <ModalOverlay />
            <ModalContent w="50%">
              <ModalHeader textAlign="center" mt={3}>
                MANAGE YOUR ADDRESS
              </ModalHeader>
              <ModalCloseButton
                mt={3}
                mr={2}
                outline="none"
                _focus={{ outline: "none" }}
              />
              <ModalBody>
                <Stack spacing={4} mt={3}>
                  <Stack isInline spacing={4}>
                    <FormControl display="flex" w="50%" alignItems="center">
                      <FormLabel htmlFor="firstName" fontSize={14} w="50%">
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
                        //   onChange={this.handleFirstName}
                      />
                    </FormControl>
                    <FormControl display="flex" w="50%" alignItems="center">
                      <FormLabel htmlFor="lastName" fontSize={14} w="50%">
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
                        //   onChange={this.handleLastName}
                      />
                    </FormControl>
                  </Stack>
                  <Stack spacing={4}>
                    <FormControl display="flex" alignItems="center">
                      <FormLabel htmlFor="addr1" fontSize={14} w="26%">
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
                      <FormLabel htmlFor="addr2" fontSize={14} w="26%">
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
                        onChange={this.handleState}
                      />
                    </FormControl>
                  </Stack>
                  <Stack isInline spacing={4}>
                    <FormControl display="flex" alignItems="center" w="50%">
                      <FormLabel htmlFor="country" fontSize={14} w="27%">
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
                      <FormLabel htmlFor="state" fontSize={14} w="38%">
                        Pin code:
                      </FormLabel>
                      <Input
                        type="number"
                        id="state"
                        isRequired
                        defaultValue={user.address.zip}
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
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  variant="solid"
                  bg="var(--nero-black)"
                  rounded={0}
                  my={17}
                  color="#fff"
                  border="1px solid var(--nero-black)"
                  fontSize={14}
                  fontWeight="400"
                  letterSpacing={2}
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
                  SAVE
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: { ...state.user.user },
    loginSuccess: state.user.loginSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogout()),
    manageAddress: (addr, id) => dispatch(manageAddress(addr, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
