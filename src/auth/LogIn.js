import React, { Component } from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  // InputRightElement,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userLogin } from "./authSlice";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email,
    });
  };

  handlePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password,
    });
  };

  handleUserLogIn = async (e) => {
    try {
      e.preventDefault();
      const { email, password } = this.state;
      const user = { email, password };
      const response = await this.props.userLogin(user);
      this.setState({
        email: "",
        password: "",
      });
      if (response.payload.loginSuccess) {
        this.props.history.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <Stack
          alignItems="center"
          justifyContent="center"
          pt="9%"
          pb="16%"
          background="linear-gradient(to top, #efefef ,#f4f4f4)"
        >
          <Heading
            as="h4"
            fontSize={22}
            fontWeight="sm"
            letterSpacing={2}
            color="var(--nero-black)"
            className="font-montserrat"
          >
            LOGIN
          </Heading>
          <Text color="var(--nero-black)" fontSize={13} pt={3}>
            Please enter your e-mail and password:
          </Text>
          <form onSubmit={this.handleUserLogIn}>
            <FormControl w={400}>
              <FormLabel htmlFor="email"></FormLabel>
              <InputGroup border="0.5px" borderColor="var(--nero-black)">
                <InputLeftAddon
                  children={
                    <Icon name="email" size="19px" color="var(--nero-black)" />
                  }
                  bg="transparent"
                  rounded={0}
                />
                <Input
                  type="email"
                  id="email"
                  aria-describedby="user-email"
                  isRequired
                  placeholder="Email"
                  _placeholder={{ color: "#777" }}
                  value={this.state.email}
                  isFullWidth={true}
                  fontSize={14}
                  rounded={0}
                  bg="transparent"
                  outline="none"
                  _focus={{
                    outline: "none",
                  }}
                  _groupHover={{
                    border: "1px",
                    borderColor: "var(--nero-black)",
                  }}
                  onChange={this.handleEmail}
                />
              </InputGroup>
              <FormLabel htmlFor="password"></FormLabel>
              <InputGroup
                border="0.5px"
                borderColor="var(--nero-black)"
                _groupHover={{ boxShadow: "0 0 1px var(--nero-black)" }}
              >
                <InputLeftAddon
                  children={
                    <Icon name="lock" size="19px" color="var(--nero-black)" />
                  }
                  bg="transparent"
                  rounded={0}
                />
                {/* <InputRightElement
                  children={
                    <Button
                      variant="link"
                      size="xs"
                      outline="none"
                      _focus={{ outline: "none" }}
                      color="var(--dim-gray)"
                    >
                      Forgot password?
                    </Button>
                  }
                  w={115}
                  size="xs"
                /> */}
                <Input
                  type="password"
                  id="password"
                  aria-describedby="user-password"
                  placeholder="Password"
                  _placeholder={{ color: "#777" }}
                  value={this.state.password}
                  isFullWidth={true}
                  fontSize={14}
                  isRequired
                  rounded={0}
                  bg="transparent"
                  maxLength="12"
                  minLength="6"
                  outline="none"
                  _focus={{
                    outline: "none",
                  }}
                  _groupHover={{
                    border: "1px",
                    borderColor: "var(--nero-black)",
                  }}
                  onChange={this.handlePassword}
                />
              </InputGroup>
              <Button
                type="submit"
                variant="solid"
                bg="var(--nero-black)"
                rounded={0}
                mt={22}
                color="#fff"
                border="1px solid var(--nero-black)"
                fontSize={14}
                fontWeight="400"
                letterSpacing={2}
                w="100%"
                pt="3px"
                _hover={{
                  outline: "none",
                  bg: "transparent",
                  color: "var(--nero-black)",
                  border: "1px solid var(--nero-black)",
                }}
                _focus={{ outline: "none" }}
                _active={{ bg: "transparent" }}
              >
                LOGIN
              </Button>
            </FormControl>
          </form>
          <Flex mt={6} fontSize={13} fontWeight="400">
            <Text color="var(--dim-gray)">Don't have an account?</Text>
            <Text
              ml={1}
              color="var(--nero-black)"
              _hover={{ color: "var(--dim-gray)" }}
            >
              <Link to="/account/register">Create one</Link>
            </Text>
          </Flex>
        </Stack>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

export default connect(null, mapDispatchToProps)(LogIn);
