import React, { Component } from "react";
import { connect } from "react-redux";
import { Heading, Stack, Text, FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { createUser } from "./authSlice";
import routes from "../routes/routes";
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
    }

    handleFirstName = (e) => {
        const firstName = e.target.value;
        this.setState({
            firstName,
        });
    };
    handleLastName = (e) => {
        const lastName = e.target.value;
        this.setState({
            lastName,
        });
    };
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

    handleCreateUser = async (e) => {
        try {
            e.preventDefault();
            const { firstName, lastName, email, password } = this.state;
            const user = {
                firstName,
                lastName,
                email,
                password,
            };
            const response = await this.props.createUser(user);
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
            if (response.payload.status) {
                toast.success(response.payload?.message, { autoClose: 2000 });
                this.props.history.push(routes.login);
            } else {
                toast.error(response.payload?.message, { autoClose: 2000 });
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
                    pt="8%"
                    pb="13%"
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
                        REGISTER
                    </Heading>
                    <Text color="var(--nero-black)" fontSize={13} pt={3}>
                        Please fill in the information below:
                    </Text>
                    <form onSubmit={this.handleCreateUser}>
                        <FormControl w={400}>
                            <FormLabel htmlFor="firstName"></FormLabel>
                            <Input
                                type="text"
                                id="firstName"
                                aria-describedby="user-firstName"
                                placeholder="First Name"
                                _placeholder={{ color: "#777" }}
                                isRequired
                                // isFullWidth={true}
                                rounded={0}
                                bg="transparent"
                                outline="none"
                                border="1px"
                                value={this.state.firstName}
                                fontSize={14}
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
                                onChange={this.handleFirstName}
                            />
                            <FormLabel htmlFor="lastName"></FormLabel>
                            <Input
                                type="text"
                                id="lastName"
                                aria-describedby="user-lastName"
                                placeholder="Last Name"
                                _placeholder={{ color: "#777" }}
                                isRequired
                                // isFullWidth={true}
                                rounded={0}
                                bg="transparent"
                                value={this.state.lastName}
                                fontSize={14}
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
                                onChange={this.handleLastName}
                            />
                            <FormLabel htmlFor="email"></FormLabel>
                            <Input
                                type="email"
                                id="email"
                                aria-describedby="user-email"
                                value={this.state.email}
                                placeholder="Email"
                                _placeholder={{ color: "#777" }}
                                isRequired
                                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                                // isFullWidth={true}
                                rounded={0}
                                bg="transparent"
                                outline="none"
                                fontSize={14}
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
                                onChange={this.handleEmail}
                            />
                            <FormLabel htmlFor="password"></FormLabel>
                            <Input
                                type="password"
                                id="password"
                                aria-describedby="user-password"
                                value={this.state.password}
                                placeholder="Password"
                                _placeholder={{ color: "#777" }}
                                // isFullWidth={true}
                                isRequired
                                rounded={0}
                                bg="transparent"
                                border="1px"
                                borderColor="#ccc"
                                maxLength="12"
                                minLength="6"
                                outline="none"
                                fontSize={14}
                                _focus={{
                                    outline: "none",
                                }}
                                _hover={{
                                    border: "1px",
                                    borderColor: "var(--nero-black)",
                                }}
                                onChange={this.handlePassword}
                            />
                            <Button
                                type="submit"
                                variant="solid"
                                bg="var(--nero-black)"
                                rounded={0}
                                mt={22}
                                color="#fff"
                                border="1px solid var(--nero-black)"
                                fontSize={13}
                                fontWeight="400"
                                letterSpacing={2}
                                w="100%"
                                pt="4px"
                                _hover={{
                                    outline: "none",
                                    bg: "transparent",
                                    color: "var(--nero-black)",
                                    border: "1px solid var(--nero-black)",
                                }}
                                _focus={{ outline: "none" }}
                                _active={{ bg: "transparent" }}
                            >
                                CREATE MY ACCOUNT
                            </Button>
                        </FormControl>
                    </form>
                    <Flex mt={6} fontSize={13} fontWeight="400">
                        <Text color="var(--dim-gray)">If you already have an account. Try</Text>
                        <Text ml={1} color="var(--nero-black)" _hover={{ color: "var(--dim-gray)" }}>
                            <Link to="/login">Log in</Link>
                        </Text>
                    </Flex>
                </Stack>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(SignUp);
