import React, { Component } from "react";
import {
  Flex,
  Stack,
  Text,
  Heading,
  Icon,
  List,
  ListItem,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Flex pt={75} pb={42}>
          <Flex px={80} justifyContent="space-between">
            <Stack w="29%" mb={50} p={2}>
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
                lineHeight="1.6"
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
                  <Link to="/collection/all">All products</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/award-winners">Award winners</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/signature-teas">Signature teas</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  my={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/black-tea">Black teas</Link>
                </ListItem>
                <ListItem
                  color="var(--dim-gray)"
                  mt={3}
                  fontSize={14}
                  _hover={{ color: "var(--nero-black)" }}
                >
                  <Link to="/collection/white-tea">White teas</Link>
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
          </Flex>
        </Flex>
      </>
    );
  }
}

export default Footer;
