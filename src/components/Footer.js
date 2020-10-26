import React, { Component } from "react";
import {
  Flex,
  Stack,
  Text,
  Heading,
  Icon,
  List,
  ListItem,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

import PaymentModes from "./PaymentModes";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Stack pt={75} pb={42}>
          <Flex px={80} justifyContent="space-between">
            <Stack w="22%" mb={50} p={2}>
              <Heading
                as="h6"
                size="xs"
                color="var(--nero-black)"
                fontWeight="500"
                letterSpacing="1.8px"
                fontSize={14}
              >
                ABOUT THE SHOP
              </Heading>
              <Text
                fontSize={13}
                color="var(--dim-gray)"
                mt="20px"
                lineHeight={2}
              >
                The story of Rujani Tea, started with a dream and a passion to
                bring the wonders of loose-leaf Assam tea to tea lovers across
                the world.{" "}
                <span className="strong-text">
                  We are fourth generation tea planters and have been producing
                  award winning teas since 1897.
                </span>
              </Text>
              <Text
                fontSize={13}
                color="var(--dim-gray)"
                mt="20px"
                lineHeight={2}
              >
                Assam tea is perceived to be just "tea in a bag". We hope to
                change that perception by{" "}
                <span className="strong-text">
                  bringing you a range of speciality teas, from our tea farm to
                  your cup.
                </span>
              </Text>
              <Flex mt={14}>
                <Link as="a" to="#">
                  <Icon
                    as={RiFacebookFill}
                    size={5}
                    color="var(--dim-gray)"
                    mr={10}
                  ></Icon>
                </Link>
                <Link as="a" to="#">
                  <Icon
                    as={RiInstagramLine}
                    size={5}
                    color="var(--dim-gray)"
                  ></Icon>
                </Link>
              </Flex>
            </Stack>
            <Stack px={10} mb={50} pt={2}>
              <Heading
                as="h6"
                size="xs"
                color="var(--nero-black)"
                fontWeight="500"
                letterSpacing="1.8px"
                fontSize={14}
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
                  <Link to="/products">All products</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/1">Award winners</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/2">Signature teas</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/3">Black teas</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  mt={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/5">White teas</Link>
                </ListItem>
              </List>
            </Stack>
            <Stack px={10} mb={50} pt={2}>
              <Heading
                as="h6"
                size="xs"
                color="var(--nero-black)"
                fontWeight="500"
                letterSpacing="1.8px"
                fontSize={14}
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
                  <Link to="/contact-us">Contact Us</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/about">About us</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/faq">FAQ</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  Search
                </ListItem>
              </List>
            </Stack>
            <Stack w="18%" mb={50} p={2}>
              <Heading
                as="h6"
                size="xs"
                color="var(--nero-black)"
                fontWeight="500"
                letterSpacing="1.8px"
                fontSize={14}
              >
                NEWSLETTER
              </Heading>
              <Text
                fontSize={13}
                color="var(--dim-gray)"
                mt="20px"
                lineHeight={2}
                w="80%"
              >
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </Text>
              <Flex mt={14}>
                <form>
                  <FormControl isRequired>
                    <Input
                      variant="outline"
                      placeholder="Enter your email"
                      rounded={0}
                      size="md"
                      border="1px solid #777"
                      _hover={{ outline: "none", border: "1px solid #000" }}
                      _focus={{ outline: "none", border: "1px solid #000" }}
                      w={290}
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
                        bg: "white",
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
            px={80}
            justifyContent="space-between"
            mt={50}
            alignItems="center"
          >
            <Text
              letterSpacing="1.5px"
              textTransform="uppercase"
              fontSize={12}
              color="var(--nero-black)"
            >
              <Link
                to="/"
                _hover={{ textDecoration: "none", color: "var(--dim-gray)" }}
              >
                © Rujani Tea India
              </Link>
            </Text>
            <PaymentModes />
          </Flex>
        </Stack>
      </>
    );
  }
}

export default Footer;
