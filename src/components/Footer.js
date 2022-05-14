import React from "react";
import { Flex, Stack, Text, Heading, Icon, List, ListItem, FormControl, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

import PaymentModes from "./PaymentModes";
import routes from "../routes/routes";

const Footer = (props) => {
    return (
        <>
            <Stack pt={{ base: "34px", sm: "60px", md: "75px" }} pb={{ base: "34px", md: "42px" }} bg="white">
                <Flex
                    px={{ base: "24px", md: "50px", lg: "80px" }}
                    justifyContent="space-between"
                    flexFlow={{ base: "column nowrap", sm: "row wrap" }}
                >
                    <Stack
                        w={{ base: "100%", md: "50%", lg: "40%", xl: "27%", "2xl": "30%" }}
                        mb={{ base: "50px" }}
                        pr={{ base: 0, md: "40px", xl: "50px" }}
                    >
                        <Heading
                            as="h6"
                            size="xs"
                            color="var(--nero-black)"
                            fontWeight="500"
                            letterSpacing="1.8px"
                            fontSize={14}
                            mb={"20px"}
                        >
                            ABOUT THE SHOP
                        </Heading>
                        <Text fontSize={13} color="var(--dim-gray)" mt="20px" lineHeight={2}>
                            The story of Rujani Tea, started with a dream and a passion to bring the wonders of
                            loose-leaf Assam tea to tea lovers across the world.{" "}
                            <span className="strong-text">
                                We are fourth generation tea planters and have been producing award winning teas since
                                1897.
                            </span>
                        </Text>
                        <Text fontSize={13} color="var(--dim-gray)" mt="20px" lineHeight={2}>
                            Assam tea is perceived to be just "tea in a bag". We hope to change that perception by{" "}
                            <span className="strong-text">
                                bringing you a range of speciality teas, from our tea farm to your cup.
                            </span>
                        </Text>
                        <Flex mt={14}>
                            <Link as="a" to="#">
                                <Icon as={RiFacebookFill} size={5} color="var(--dim-gray)" mr={10}></Icon>
                            </Link>
                            <Link as="a" to="#">
                                <Icon as={RiInstagramLine} size={5} color="var(--dim-gray)"></Icon>
                            </Link>
                        </Flex>
                    </Stack>
                    <Stack
                        px={{ base: 0, md: "40px" }}
                        mb={{ base: "50px" }}
                        w={{ base: "100%", sm: "50%", lg: "auto" }}
                    >
                        <Heading
                            as="h6"
                            size="xs"
                            color="var(--nero-black)"
                            fontWeight="500"
                            letterSpacing="1.8px"
                            fontSize={14}
                            mb={"20px"}
                        >
                            CATEGORIES
                        </Heading>
                        <List styleType="none" p={0} m={0} mt="20px">
                            <ListItem
                                color="var(--dim-gray)"
                                mb={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.products}>All products</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                my={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.category.replace(":id", 1)}>Award winners</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                my={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.category.replace(":id", 2)}>Signature teas</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                my={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.category.replace(":id", 3)}>Black teas</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                mt={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.category.replace(":id", 5)}>White teas</Link>
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack
                        pr={{ base: 0, md: "40px" }}
                        pl={{ base: 0, lg: "40px" }}
                        mb={{ base: "50px" }}
                        w={{ base: "100%", sm: "50%", lg: "auto" }}
                    >
                        <Heading
                            as="h6"
                            size="xs"
                            color="var(--nero-black)"
                            fontWeight="500"
                            letterSpacing="1.8px"
                            fontSize={14}
                            mb={"20px"}
                        >
                            INFORMATION
                        </Heading>
                        <List styleType="none" p={0} m={0} mt="20px">
                            <ListItem
                                color="var(--dim-gray)"
                                mb={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.contact}>Contact Us</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                my={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.about}>About us</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                my={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.faq}>FAQ</Link>
                            </ListItem>
                            <ListItem
                                color="var(--dim-gray)"
                                mt={3}
                                fontSize={14}
                                _hover={{ color: "var(--nero-black)" }}
                            >
                                <Link to={routes.teagram}>Teagram</Link>
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack
                        px={{ base: "0px", md: "40px", lg: "0px" }}
                        pl={{ xl: "20px" }}
                        mb={{ base: "50px" }}
                        w={{ base: "100%", md: "50%", lg: "100%", xl: "22%" }}
                    >
                        <Heading
                            as="h6"
                            size="xs"
                            color="var(--nero-black)"
                            fontWeight="500"
                            letterSpacing="1.8px"
                            fontSize={14}
                            mb={"20px"}
                        >
                            NEWSLETTER
                        </Heading>
                        <Text fontSize={13} color="var(--dim-gray)" mt="20px" lineHeight={2} w="80%">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </Text>
                        <Flex mt={14}>
                            <form>
                                <FormControl isRequired>
                                    <Input
                                        variant="outline"
                                        placeholder="Enter your email"
                                        rounded={0}
                                        border="1px solid #cfcfcf"
                                        size="md"
                                        maxW="450px"
                                        _hover={{ outline: "none", border: "1px solid #000" }}
                                        _focus={{ outline: "none", border: "1px solid #000" }}
                                    />
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
                                    >
                                        SUBSCRIBE
                                    </Button>
                                </FormControl>
                            </form>
                        </Flex>
                    </Stack>
                </Flex>
                <Flex
                    px={{ base: "0", md: "50px", lg: "80px" }}
                    justifyContent="space-between"
                    pt={{ base: "25px", md: "40px" }}
                    alignItems="center"
                    flexDir={{ base: "column", md: "row" }}
                >
                    <Text
                        letterSpacing="1.5px"
                        textTransform="uppercase"
                        fontSize={12}
                        color="var(--nero-black)"
                        whiteSpace="nowrap"
                    >
                        <Link to={routes.home} _hover={{ textDecoration: "none", color: "var(--dim-gray)" }}>
                            © Rujani Tea India
                        </Link>
                    </Text>
                    <PaymentModes />
                </Flex>
            </Stack>
        </>
    );
};

export default Footer;
