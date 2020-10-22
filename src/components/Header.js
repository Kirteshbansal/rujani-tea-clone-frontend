import React, { Component } from "react";
import { Flex, Image, List, ListItem, Icon, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { BiUser, BiShoppingBag } from "react-icons/bi";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Flex bg="white" minH={80} px={50} py={18} justifyContent="space-between">
        <List
          styleType="none"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          fontSize="0.8em"
          fontWeight="600"
          letterSpacing="1.5px"
          w="45%"
          m={0}
          p={0}
        >
          <ListItem mx="2%" my={3}>
            <Link to="/">HOME</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/collection/all">SHOP</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/about">ABOUT</Link>
          </ListItem>
          <ListItem mx="2%" my={3} wordBreak="keep-all">
            <Link to="/the-teagram">THE TEAGRAM</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/faq">FAQ</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Link to="/contact-us">CONTACT US</Link>
          </ListItem>
        </List>
        <Link w="10%" to="/" justifyContent="center" alignItems="center">
          <Image
            size=""
            objectFit="cover"
            src="https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Logo_1200X628_Transparent_e2260294-1e92-4cce-bcc4-097f0bc4ca24_110x.png?v=1594688645"
            alt="rujani tea logo"
          />
        </Link>
        <Flex
          w="45%"
          justifyContent="flex-end"
          color="gray"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Link to="/account">
              <Icon as={BiUser} size="27px" mr={4} />
            </Link>
            <IconButton
              variantColor="transparent"
              aria-label="Search product"
              color="black"
              icon="search"
              size="lg"
              h="auto"
              w="auto"
              mr={4}
              p={0}
              _focus={{ outline: "none" }}
            />
            <Link to="/cart">
              <Icon as={BiShoppingBag} size="27px" mr={2} />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Header;
