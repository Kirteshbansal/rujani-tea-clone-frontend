import React, { Component } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/core";

class CartDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isOpen, onOpen, onClose } = this.props;
    return (
      <>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
          <DrawerOverlay />
          <DrawerContent background="linear-gradient(to bottom, #efefef ,#f2f2f2)">
            <DrawerCloseButton _focus={{ outline: "none" }} my={3} mr={2} />
            <DrawerHeader></DrawerHeader>
            <DrawerBody></DrawerBody>
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
}

export default CartDrawer;
