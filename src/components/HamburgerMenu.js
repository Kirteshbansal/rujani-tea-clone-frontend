import React, { Component } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Fade,
    List,
    ListItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
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
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";

import { changeItemQuantity, removeProduct } from "../cart/cartSlice";
import routes from "../routes/routes";

class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { isOpen, onClose, drawerName } = this.props;
        return (
            <>
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={() => onClose(drawerName)}
                    size="xs"
                    isFullHeight={true}
                    blockScrollOnMount
                >
                    <DrawerOverlay />
                    <DrawerContent background="var(--carbon-black)">
                        <DrawerCloseButton
                            _focus={{ outline: "none" }}
                            my={3}
                            mr={2}
                            right="0"
                            left={3}
                            fontSize="sm"
                            color="white"
                        />
                        <DrawerHeader
                            my={0}
                            minH={"3.15em"}
                            maxH={"3.15em"}
                            h={"3.15em"}
                            background="var(--carbon-black)"
                        ></DrawerHeader>
                        <DrawerBody color="white" className="hamburger-drawer-body">
                            <Fade in={true}>
                                <List className="hamburger-menu" color="white">
                                    <ListItem borderBottom="1.75px solid #FFFFFF25" fontSize="xs" letterSpacing="2px">
                                        <Link to={routes.home} className="hamburger-menu__link">
                                            HOME
                                        </Link>
                                    </ListItem>
                                    <ListItem borderBottom="1.75px solid #FFFFFF25" fontSize="xs" letterSpacing="2px">
                                        <Accordion allowMultiple>
                                            <AccordionItem border="unset">
                                                {({ isExpanded }) => (
                                                    <>
                                                        <AccordionButton
                                                            variant="without-shadow"
                                                            px="0"
                                                            py="20px"
                                                            fontSize="xs"
                                                            letterSpacing="1px"
                                                            bg="transparent"
                                                            _focus={{
                                                                outline: "none",
                                                            }}
                                                        >
                                                            <Box flex="1" textAlign="left">
                                                                SHOP
                                                            </Box>
                                                            {isExpanded ? (
                                                                <FiMinus fontSize={14} />
                                                            ) : (
                                                                <FiPlus fontSize={14} />
                                                            )}
                                                        </AccordionButton>
                                                        <AccordionPanel pb={4} pr={0}>
                                                            <AccordionItem border="unset">
                                                                {({ isExpanded }) => (
                                                                    <>
                                                                        <AccordionButton
                                                                            variant="without-shadow"
                                                                            px="0"
                                                                            py={13}
                                                                            fontSize={11}
                                                                            letterSpacing="2px"
                                                                            bg="transparent"
                                                                            _focus={{
                                                                                outline: "none",
                                                                            }}
                                                                            color="var"
                                                                            _hover={{ color: "white" }}
                                                                        >
                                                                            <Box
                                                                                flex="1"
                                                                                textAlign="left"
                                                                                textTransform="uppercase"
                                                                            >
                                                                                Categories
                                                                            </Box>
                                                                            {isExpanded ? (
                                                                                <FiMinus fontSize={14} />
                                                                            ) : (
                                                                                <FiPlus fontSize={14} />
                                                                            )}
                                                                        </AccordionButton>
                                                                        <AccordionPanel pb={4} pl={0}>
                                                                            <List
                                                                                borderLeft="1px solid var(--white-80)"
                                                                                pl={4}
                                                                                ml={2}
                                                                            >
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.category.replace(
                                                                                            ":id",
                                                                                            1
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link"
                                                                                    >
                                                                                        Award winners
                                                                                    </Link>
                                                                                </ListItem>
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.category.replace(
                                                                                            ":id",
                                                                                            2
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link"
                                                                                    >
                                                                                        Signature teas
                                                                                    </Link>
                                                                                </ListItem>
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.products}
                                                                                        className="hamburger-menu__accordion-link mb-0"
                                                                                    >
                                                                                        All products
                                                                                    </Link>
                                                                                </ListItem>
                                                                            </List>
                                                                        </AccordionPanel>
                                                                    </>
                                                                )}
                                                            </AccordionItem>
                                                            <AccordionItem border="unset">
                                                                {({ isExpanded }) => (
                                                                    <>
                                                                        <AccordionButton
                                                                            variant="without-shadow"
                                                                            px="0"
                                                                            py={13}
                                                                            fontSize={11}
                                                                            letterSpacing="2px"
                                                                            bg="transparent"
                                                                            _focus={{
                                                                                outline: "none",
                                                                            }}
                                                                            color="var"
                                                                            _hover={{ color: "white" }}
                                                                        >
                                                                            <Box
                                                                                flex="1"
                                                                                textAlign="left"
                                                                                textTransform="uppercase"
                                                                            >
                                                                                Bestsellers
                                                                            </Box>
                                                                            {isExpanded ? (
                                                                                <FiMinus fontSize={14} />
                                                                            ) : (
                                                                                <FiPlus fontSize={14} />
                                                                            )}
                                                                        </AccordionButton>
                                                                        <AccordionPanel pb={4} pl={0}>
                                                                            <List
                                                                                borderLeft="1px solid var(--white-80)"
                                                                                pl={4}
                                                                                ml={2}
                                                                            >
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.product.replace(
                                                                                            ":id",
                                                                                            16
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link"
                                                                                    >
                                                                                        Tippy Reserve
                                                                                    </Link>
                                                                                </ListItem>
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.product.replace(
                                                                                            ":id",
                                                                                            6
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link"
                                                                                    >
                                                                                        Morning Special
                                                                                    </Link>
                                                                                </ListItem>
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.product.replace(
                                                                                            ":id",
                                                                                            12
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link mb-0"
                                                                                    >
                                                                                        Royale Golden CTC
                                                                                    </Link>
                                                                                </ListItem>
                                                                            </List>
                                                                        </AccordionPanel>
                                                                    </>
                                                                )}
                                                            </AccordionItem>
                                                            <AccordionItem border="unset">
                                                                {({ isExpanded }) => (
                                                                    <>
                                                                        <AccordionButton
                                                                            variant="without-shadow"
                                                                            px="0"
                                                                            py={13}
                                                                            fontSize={11}
                                                                            letterSpacing="2px"
                                                                            bg="transparent"
                                                                            _focus={{
                                                                                outline: "none",
                                                                            }}
                                                                            color="var"
                                                                            _hover={{ color: "white" }}
                                                                        >
                                                                            <Box
                                                                                flex="1"
                                                                                textAlign="left"
                                                                                textTransform="uppercase"
                                                                            >
                                                                                Classics
                                                                            </Box>
                                                                            {isExpanded ? (
                                                                                <FiMinus fontSize={14} />
                                                                            ) : (
                                                                                <FiPlus fontSize={14} />
                                                                            )}
                                                                        </AccordionButton>
                                                                        <AccordionPanel pb={4} pl={0}>
                                                                            <List
                                                                                borderLeft="1px solid var(--white-80)"
                                                                                pl={4}
                                                                                ml={2}
                                                                            >
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.category.replace(
                                                                                            ":id",
                                                                                            3
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link"
                                                                                    >
                                                                                        Black Tea
                                                                                    </Link>
                                                                                </ListItem>
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.category.replace(
                                                                                            ":id",
                                                                                            5
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link"
                                                                                    >
                                                                                        White Tea
                                                                                    </Link>
                                                                                </ListItem>
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.category.replace(
                                                                                            ":id",
                                                                                            6
                                                                                        )}
                                                                                        className="hamburger-menu__accordion-link mb-0"
                                                                                    >
                                                                                        Green Tea
                                                                                    </Link>
                                                                                </ListItem>
                                                                            </List>
                                                                        </AccordionPanel>
                                                                    </>
                                                                )}
                                                            </AccordionItem>
                                                            <AccordionItem border="unset">
                                                                {({ isExpanded }) => (
                                                                    <>
                                                                        <AccordionButton
                                                                            variant="without-shadow"
                                                                            px="0"
                                                                            py={13}
                                                                            fontSize={11}
                                                                            letterSpacing="2px"
                                                                            bg="transparent"
                                                                            _focus={{
                                                                                outline: "none",
                                                                            }}
                                                                            color="var"
                                                                            _hover={{ color: "white" }}
                                                                        >
                                                                            <Box
                                                                                flex="1"
                                                                                textAlign="left"
                                                                                textTransform="uppercase"
                                                                            >
                                                                                Wholesale
                                                                            </Box>
                                                                            {isExpanded ? (
                                                                                <FiMinus fontSize={14} />
                                                                            ) : (
                                                                                <FiPlus fontSize={14} />
                                                                            )}
                                                                        </AccordionButton>
                                                                        <AccordionPanel pb={4} pl={0}>
                                                                            <List
                                                                                borderLeft="1px solid var(--white-80)"
                                                                                pl={4}
                                                                                ml={2}
                                                                            >
                                                                                <ListItem
                                                                                    fontSize={14}
                                                                                    letterSpacing="1px"
                                                                                    color="var(--white-80)"
                                                                                    _hover={{ color: "white" }}
                                                                                >
                                                                                    <Link
                                                                                        to={routes.contact}
                                                                                        className="hamburger-menu__accordion-link mb-0"
                                                                                    >
                                                                                        Inquiry
                                                                                    </Link>
                                                                                </ListItem>
                                                                            </List>
                                                                        </AccordionPanel>
                                                                    </>
                                                                )}
                                                            </AccordionItem>
                                                        </AccordionPanel>
                                                    </>
                                                )}
                                            </AccordionItem>
                                        </Accordion>
                                    </ListItem>
                                    <ListItem borderBottom="1.75px solid #FFFFFF25" fontSize="xs" letterSpacing="2px">
                                        <Link to={routes.about} className="hamburger-menu__link">
                                            ABOUT
                                        </Link>
                                    </ListItem>
                                    <ListItem borderBottom="1.75px solid #FFFFFF25" fontSize="xs" letterSpacing="2px">
                                        <Link to={routes.teagram} className="hamburger-menu__link">
                                            THE TEAGRAM
                                        </Link>
                                    </ListItem>
                                    <ListItem borderBottom="1.75px solid #FFFFFF25" fontSize="xs" letterSpacing="2px">
                                        <Link to={routes.faq} className="hamburger-menu__link">
                                            FAQ
                                        </Link>
                                    </ListItem>
                                    <ListItem borderBottom="1.75px solid #FFFFFF25" fontSize="xs" letterSpacing="2px">
                                        <Link to={routes.contact} className="hamburger-menu__link">
                                            CONTACT US
                                        </Link>
                                    </ListItem>
                                </List>
                                <Box
                                    fontSize="xs"
                                    letterSpacing="2.2px"
                                    mb={35}
                                    color="var(--white-80)"
                                    _hover={{ color: "white" }}
                                >
                                    <Link to={routes.profile} className="hamburger-menu__link">
                                        Account
                                    </Link>
                                </Box>
                            </Fade>
                        </DrawerBody>
                        {/* {cartProducts.length <= 0 ? null : (
                            <DrawerFooter
                                px={8}
                                py={6}
                                borderTop="1px solid #ccc"
                                display="flex"
                                flexDirection="column"
                            >
                                <Text mb={4} fontSize={14} color="var(--dim-gray)" fontWeight="200">
                                    Inclusive of all shipping & taxes.
                                </Text>
                                <Link to="/checkout" className="checkout-button">
                                    CHECKOUT - RS. {totalCost}
                                </Link>
                            </DrawerFooter>
                        )} */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerMenu);
