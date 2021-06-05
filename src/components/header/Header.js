import React, { Component } from "react";
import { Flex, Image, List, ListItem, Icon, Button, Stack, Box, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { connect } from "react-redux";

import Cart from "../../cart/Cart";
import HamburgerMenu from "../HamburgerMenu";
import SearchProducts from "../SearchProducts";
import routes from "../../routes/routes";
import logo from "../../public/dist/rujani-logo.png";
import MegaMenu from "./MegaMenu";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
            cartDrawer: false,
            hamburgerDrawer: false,
            searchModal: false,
        };
    }

    openComponent = (CompName) => {
        this.setState({ [CompName]: true });
    };

    closeComponent = (CompName) => {
        this.setState({ [CompName]: false });
    };

    displayMegaMenuHandler = () => {
        this.setState({ displayMenu: !this.state.displayMenu });
    };

    hideMegaMenuHandler = () => {
        if (this.state.displayMenu) {
            this.setState({ displayMenu: false });
        }
    };

    changeDefaultStyle = {
        background: "transparent",
        outline: "none",
        textShadow: "none",
        color: "var(--nero-black)",
    };

    render() {
        const { hamburgerDrawer, cartDrawer, searchModal } = this.state;

        return (
            <>
                <Stack
                    bg="white"
                    maxH="fit-content"
                    py={{ base: "15px", md: "18px" }}
                    px={{ base: "18px", md: "30px", lg: "50px" }}
                    position="sticky"
                    top="0"
                    zIndex="5"
                    boxShadow="0 -1px #dddddd inset;"
                    h={{ base: "78px", md: "94px", lg: "130px", xl: "94px" }}
                    onClick={this.hideMegaMenuHandler}
                >
                    <Flex
                        justifyContent={{ base: "space-between", lg: "flex-end", xl: "space-between" }}
                        alignItems="center"
                        flexFlow={{ base: "row nowrap", lg: "row wrap", xl: "row nowrap" }}
                        justifyItems={{ lg: "space-between" }}
                        position="relative"
                        h={{ base: "48px", md: "62px", lg: "50px", xl: "62px" }}
                    >
                        <IconButton
                            aria-label="Mobile Menu"
                            icon={<GiHamburgerMenu />}
                            fontSize={{ base: "22px" }}
                            display={{ base: "inline-block", lg: "none" }}
                            background="transparent"
                            outline="none"
                            textShadow="none"
                            color="var(--nero-black)"
                            w="max-content"
                            minW="fit-content"
                            order={{ base: "1" }}
                            _active={{ ...this.changeDefaultStyle }}
                            _hover={{ ...this.changeDefaultStyle }}
                            onClick={() => this.openComponent("hamburgerDrawer")}
                        />
                        <List
                            styleType="none"
                            display={{ base: "none", lg: "flex" }}
                            alignItems="center"
                            justifyContent={{ base: "center", xl: "flex-start" }}
                            fontSize="0.8em"
                            fontWeight="600"
                            letterSpacing="1.5px"
                            color="var(--nero-black)"
                            w={{ lg: "100%", xl: "45%" }}
                            m={{ lg: "30px 0 4px 0", xl: 0 }}
                            h={{ lg: "20px" }}
                            p={0}
                            order={{ base: "1", lg: "3", xl: "1" }}
                        >
                            <ListItem mr="2%">
                                <Link to={routes.home}>HOME</Link>
                            </ListItem>
                            <ListItem mx="2%">
                                <Button
                                    variant="link"
                                    p={0}
                                    fontSize="1em"
                                    fontWeight="600"
                                    letterSpacing="1.5px"
                                    color="var(--nero-black)"
                                    _hover={{ textDecoration: "none" }}
                                    onClick={this.displayMegaMenuHandler}
                                >
                                    SHOP
                                </Button>
                                <MegaMenu
                                    showMenu={this.state.displayMenu}
                                    showMenuHandler={this.displayMegaMenuHandler}
                                />
                            </ListItem>
                            <ListItem mx="2%">
                                <Link to={routes.about}>ABOUT</Link>
                            </ListItem>
                            <ListItem mx="2%">
                                <Link to={routes.teagram}>THE TEAGRAM</Link>
                            </ListItem>
                            <ListItem mx="2%">
                                <Link to={routes.faq}>FAQ</Link>
                            </ListItem>
                            <ListItem ml="2%">
                                <Link to={routes.contact}>CONTACT US</Link>
                            </ListItem>
                        </List>
                        <Box
                            position="absolute"
                            w={{ base: "90px", md: "110px" }}
                            left="50%"
                            transform="translateX(-50%)"
                            order={{ base: 2 }}
                        >
                            <Link to={routes.home}>
                                <Image size="" objectFit="cover" src={logo} alt="rujani logo" />
                            </Link>
                        </Box>
                        <Flex
                            w="45%"
                            justifyContent="flex-end"
                            color="var(--nero-black)"
                            alignItems="center"
                            order={{ base: 3, lg: 1, xl: 2 }}
                        >
                            <Flex alignItems="center">
                                <Box d={{ base: "none", lg: "inline-block" }}>
                                    <Link to={routes.profile}>
                                        <Icon as={AiOutlineUser} fontSize={{ base: "22px", md: "25px" }} />
                                    </Link>
                                </Box>
                                <IconButton
                                    aria-label="Search Product"
                                    icon={<RiSearchLine />}
                                    outline="none"
                                    bg="transparent"
                                    fontSize={{ base: "22px", md: "24px" }}
                                    mx={{ base: "14px", lg: "18px" }}
                                    _active={{ ...this.changeDefaultStyle }}
                                    _hover={{ ...this.changeDefaultStyle }}
                                    minW="fit-content"
                                    w="auto"
                                    onClick={() => this.openComponent("searchModal")}
                                />
                                <IconButton
                                    aria-label="Cart"
                                    icon={<BsBag />}
                                    outline="none"
                                    bg="transparent"
                                    fontSize={{ base: "22px", md: "24px" }}
                                    _active={{ ...this.changeDefaultStyle }}
                                    _hover={{ ...this.changeDefaultStyle }}
                                    minW="fit-content"
                                    w="auto"
                                    onClick={() => this.openComponent("cartDrawer")}
                                    position="relative"
                                />
                                {this.props.cartItems > 0 ? (
                                    <Box
                                        position="absolute"
                                        right={{ base: "-10px", md: "-12.5px", lg: "-12px" }}
                                        top={{ base: "2.5px", md: "6px", lg: "0px", xl: "7.5px" }}
                                        bg="var(--nero-black)"
                                        color="white"
                                        fontSize={{ base: "12px" }}
                                        verticalAlign="middle"
                                        borderRadius="50%"
                                        minW={{ base: "16px" }}
                                        d="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        w={{ base: "20px" }}
                                        h={{ base: "20px" }}
                                    >
                                        {this.props.cartItems}
                                    </Box>
                                ) : null}
                                <Cart isOpen={cartDrawer} onClose={this.closeComponent} drawerName="cartDrawer" />
                                <HamburgerMenu
                                    isOpen={hamburgerDrawer}
                                    onClose={this.closeComponent}
                                    drawerName="hamburgerDrawer"
                                />
                                <SearchProducts
                                    isOpen={searchModal}
                                    onClose={this.closeComponent}
                                    compName="searchModal"
                                />
                            </Flex>
                        </Flex>
                    </Flex>
                </Stack>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: [...state.cart.cartProducts].length,
    };
};

export default connect(mapStateToProps)(Header);
