import React, { Component } from "react";
import {
  Flex,
  Image,
  List,
  ListItem,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  Text,
  Stack,
  Badge,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { BiUser, BiShoppingBag } from "react-icons/bi";
import { connect } from "react-redux";

import Cart from "../cart/Cart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
      isOpen: false,
    };
  }

  onOpen = () => {
    document.body.style.overflowY = "hidden";
    this.setState({ isOpen: true });
  };
  onClose = () => {
    document.body.style.overflowY = "unset";
    this.setState({ isOpen: false });
  };

  displayMegaMenu = () => {
    this.setState({ displayMenu: !this.state.displayMenu });
  };

  render() {
    return (
      <Flex
        bg="white"
        minH={80}
        px={50}
        py={18}
        justifyContent="space-between"
        position="sticky"
        top="0"
        zIndex="1"
      >
        <List
          styleType="none"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          fontSize="0.8em"
          fontWeight="600"
          letterSpacing="1.5px"
          color="var(--nero-black)"
          w="45%"
          m={0}
          p={0}
        >
          <ListItem mx="2%" my={3}>
            <Link to="/">HOME</Link>
          </ListItem>
          <ListItem mx="2%" my={3}>
            <Menu
              overFlow="hidden"
              outline="none"
              closeOnBlur={true}
              autoSelect={false}
              boxShadow="none"
              isOpen={this.state.displayMenu}
            >
              <MenuButton
                as={Button}
                variant="unstyle"
                fontSize="1.05em"
                fontWeight="600"
                letterSpacing="1.5px"
                _focus={{
                  background: "transparent",
                  outline: "none",
                  textShadow: "none",
                  color: "var(--nero-black)",
                }}
                p={0}
                boxShadow="none"
                onClick={this.displayMegaMenu}
              >
                SHOP
              </MenuButton>
              <MenuList
                width="99.7%"
                placement="bottom-end"
                display="flex"
                justifyContent="space-between"
                pt={20}
                pb={12}
                px="12%"
                onMouseLeave={
                  this.state.displayMenu ? this.displayMegaMenu : null
                }
              >
                <MenuGroup
                  mr={30}
                  title="CATEGORIES"
                  fontSize={12}
                  fontWeight="400"
                  color="var(--dim-gray)"
                >
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{
                      color: "var(--dim-gray)",
                    }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/collection/1">Award winners</Link>
                  </MenuItem>
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/collection/2">Signature teas</Link>
                  </MenuItem>
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/products">All products</Link>
                  </MenuItem>
                </MenuGroup>
                <MenuGroup
                  title="BESTSELLERS"
                  fontSize={12}
                  fontWeight="400"
                  color="var(--dim-gray)"
                >
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/product/16">Tippy Reverse</Link>
                  </MenuItem>
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/product/6">Morning Special</Link>
                  </MenuItem>
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/product/12">Royale Golden CTC</Link>
                  </MenuItem>
                </MenuGroup>
                <MenuGroup
                  title="CLASSICS"
                  fontSize={12}
                  fontWeight="400"
                  color="var(--dim-gray)"
                >
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/collection/3">Black Tea</Link>
                  </MenuItem>
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/collection/5">White Tea</Link>
                  </MenuItem>
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/collection/6">Green Tea</Link>
                  </MenuItem>
                </MenuGroup>
                <MenuGroup
                  title="WHOLESALE"
                  fontSize={12}
                  fontWeight="400"
                  color="var(--dim-gray)"
                >
                  <MenuItem
                    fontWeight="400"
                    letterSpacing={2}
                    _groupHover={{
                      background: "transparent",
                    }}
                    _hover={{ color: "var(--dim-gray)" }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/contact-us">Inquiry</Link>
                  </MenuItem>
                </MenuGroup>
                <MenuGroup>
                  <MenuItem
                    p={0}
                    _groupHover={{
                      background: "transparent",
                      color: "var(--dim-gray)",
                    }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/product/11">
                      <Stack textAlign="center" fontWeight="400">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0287/1620/4135/collections/Rose_Green_Tea_1000x.jpg?v=1592641347"
                          w={300}
                        />
                        <Text letterSpacing={2} mt={4}>
                          ROSE GREEN
                        </Text>
                        <Text color="var(--dim-gray)" letterSpacing={2}>
                          BACK IN STOCK
                        </Text>
                      </Stack>
                    </Link>
                  </MenuItem>
                </MenuGroup>
                <MenuGroup>
                  <MenuItem
                    p={0}
                    _groupHover={{
                      background: "transparent",
                      color: "var(--dim-gray)",
                    }}
                    _focus={{ background: "transparent" }}
                    onClick={this.displayMegaMenu}
                  >
                    <Link to="/product/9">
                      <Stack textAlign="center" fontWeight="400">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0287/1620/4135/collections/Black_Pearl_1000x.jpg?v=1592641550"
                          w={300}
                        />
                        <Text letterSpacing={2} mt={4}>
                          SILVER PEARL
                        </Text>
                        <Text color="var(--dim-gray)" letterSpacing={2}>
                          LABOUR OF LOVE
                        </Text>
                      </Stack>
                    </Link>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
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
        <Link w="10%" to="/">
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
          color="var(--nero-black)"
          alignItems="center"
        >
          <Flex alignItems="center">
            <Link to="/profile">
              <Icon as={BiUser} size="27px" mr={4} />
            </Link>
            <Button
              outline="none"
              bg="transparent"
              _hover={{ backgroundColor: "transparent", outline: "none" }}
              _active={{ backgroundColor: "transparent", outline: "none" }}
              _focus={{ backgroundColor: "transparent", outline: "none" }}
            >
              <Icon
                as={BiShoppingBag}
                size="27px"
                mr={2}
                onClick={this.onOpen}
              />
              {this.props.cartitems > 0 ? (
                <Badge
                  position="absolute"
                  right="10px"
                  top="5px"
                  bg="var(--nero-black)"
                  color="white"
                  fontSize={13}
                  verticalAlign="middle"
                  rounded="50%"
                  pt="0.10rem"
                >
                  {this.props.cartitems}
                </Badge>
              ) : null}
            </Button>
            <Cart
              isOpen={this.state.isOpen}
              onOpen={this.onOpen}
              onClose={this.onClose}
            />
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartitems: [...state.cart.cartProducts].length,
  };
};

export default connect(mapStateToProps)(Header);
