import React, { Component } from "react";
import {
    Flex,
    Heading,
    Stack,
    Text,
    FormControl,
    Icon,
    Input,
    InputGroup,
    InputLeftAddon,
    Button,
    InputRightElement,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { userLogin } from "./authSlice";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import Layout from "../components/Layout/Layout";
class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPass: false,
        };
    }

    handleUserInput = (e) => {
        const inputType = e.target.name;
        this.setState({
            [inputType]: e.target.value,
        });
    };

    handleShowPass = () => {
        this.setState((prevState) => ({ showPass: !prevState?.showPass }));
    };

    handleUserLogIn = async (e) => {
        try {
            e.preventDefault();
            const { email, password } = this.state;
            const user = { email, password };
            const response = await this.props.userLogin(user);
            // this.setState({
            //     email: "",
            //     password: "",
            // });
            if (response.payload.loginSuccess) {
                toast.success("You are logged in successfully!");
            } else if (!response.payload.loginSuccess) {
                toast.info("Please check! The entered username & password are invalid");
            }
        } catch (err) {
            console.error("err", err);
            toast.error("Login Failed! Please try again.");
        }
    };

    render() {
        const { showPass, password, email } = this.state;
        console.log("this.props.loading :>> ", this.props.loading);
        return (
            <>
                <Layout showHeader={true} showFooter={true} showAnnouncement={false}>
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        pt="9%"
                        pb="16%"
                        px={{ base: "16px", sm: "0" }}
                        background="linear-gradient(to top, #efefef ,#f4f4f4)"
                        w="100%"
                        h={{ base: "calc(100vh - 100px)", lg: "calc(100vh - 135px)", xl: "calc(100vh - 100px)" }}
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
                        <Text color="var(--nero-black)" fontSize={13} pt={3} pb={"18px"}>
                            Please enter your e-mail and password:
                        </Text>
                        <form onSubmit={this.handleUserLogIn} style={{ width: "100%" }}>
                            <FormControl maxW={400} w="100%" mx="auto">
                                <InputGroup
                                    border="0.5px"
                                    borderColor="var(--nero-black)"
                                    mb={{ base: "12px", md: "14px" }}
                                >
                                    <InputLeftAddon
                                        children={<Icon as={HiOutlineMail} size="19px" color="var(--nero-black)" />}
                                        bg="transparent"
                                        rounded={0}
                                    />
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        aria-describedby="user-email"
                                        isRequired
                                        placeholder="Email"
                                        _placeholder={{ color: "#777" }}
                                        value={email}
                                        // isFullWidth={true}
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
                                        onChange={this.handleUserInput}
                                    />
                                </InputGroup>
                                <InputGroup
                                    border="0.5px"
                                    borderColor="var(--nero-black)"
                                    _groupHover={{ boxShadow: "0 0 1px var(--nero-black)" }}
                                >
                                    <InputLeftAddon
                                        children={
                                            <Icon as={HiOutlineLockClosed} size="19px" color="var(--nero-black)" />
                                        }
                                        bg="transparent"
                                        rounded={0}
                                    />
                                    <InputRightElement
                                        children={
                                            <Button
                                                variant="link"
                                                disabled={!password.length}
                                                _hover={{ textDecoration: "none", color: "var(--carbon-black)" }}
                                                fontSize={{ base: "10px" }}
                                                outline="none"
                                                _focus={{ outline: "none" }}
                                                color="var(--dim-gray)"
                                                onClick={this.handleShowPass}
                                            >
                                                {`${showPass ? "Hide" : "Show"} Password`}
                                            </Button>
                                        }
                                        w={100}
                                        size="xs"
                                    />
                                    <Input
                                        type={showPass && password.length > 0 ? "text" : "password"}
                                        aria-describedby="user-password"
                                        placeholder="Password"
                                        name="password"
                                        _placeholder={{ color: "#777" }}
                                        value={password}
                                        fontSize={14}
                                        isRequired
                                        rounded={0}
                                        bg="transparent"
                                        maxLength={12}
                                        minLength={6}
                                        outline="none"
                                        _focus={{
                                            outline: "none",
                                        }}
                                        _groupHover={{
                                            border: "1px",
                                            borderColor: "var(--nero-black)",
                                        }}
                                        onChange={this.handleUserInput}
                                    />
                                </InputGroup>
                                <Button
                                    type="submit"
                                    variant="solid"
                                    bg="var(--nero-black)"
                                    rounded={0}
                                    mt={22}
                                    isLoading={this.props.loading}
                                    loadingText="Logging in"
                                    // isDisabled={this.props.loading}
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
                            <Text ml={1} color="var(--nero-black)" _hover={{ color: "var(--dim-gray)" }}>
                                <Link to="/account/register">Create one</Link>
                            </Text>
                        </Flex>
                    </Stack>
                </Layout>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state?.user?.loading,
});

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (user) => dispatch(userLogin(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
