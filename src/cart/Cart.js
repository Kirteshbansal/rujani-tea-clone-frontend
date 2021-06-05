import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Icon,
    useBreakpointValue,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { RiTruckLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { changeItemQuantity, removeProduct } from "./cartSlice";
import CartItem from "./CartItem";

const CartDrawer = (props) => {
    const cardDrawerSize = useBreakpointValue({ base: "xs", sm: "sm" });

    const handleProductQuantity = (id, selectedQuantity) => {
        const product = { id, selectedQuantity };
        props.changeItemQuantity(product);
    };

    const handleRemoveProduct = (id) => {
        props.removeProduct(id);
    };

    const { isOpen, onClose, cartProducts, drawerName } = props;
    const totalCost = cartProducts.reduce((acc, crr) => {
        return (acc += crr.selectedQuantity * crr.price);
    }, 0);
    const cartItems = cartProducts.map((product) => {
        return (
            <CartItem
                product={product}
                removeProductHandler={handleRemoveProduct}
                productQuantityHandler={handleProductQuantity}
            />
        );
    });
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={() => onClose(drawerName)}
                size={cardDrawerSize}
                isFullHeight={true}
            >
                <DrawerOverlay />
                <DrawerContent background="linear-gradient(to bottom, #efefef ,#f2f2f2)">
                    <DrawerCloseButton _focus={{ outline: "none" }} my={3} mr={2} />
                    <DrawerHeader my={2} letterSpacing={2} fontSize={18}>
                        CART
                    </DrawerHeader>
                    <Text
                        pl={6}
                        py={2}
                        borderY="1px solid #ccc"
                        color="var(--dim-gray)"
                        fontSize={14}
                        letterSpacing={2}
                        fontWeight="300"
                        mb={3}
                    >
                        Get free shipping!...
                        <Icon as={RiTruckLine} size={6} />
                    </Text>
                    <DrawerBody overflowY="auto" className="cart-items-container">
                        {cartProducts.length > 0 ? cartItems : "Your cart is empty."}
                    </DrawerBody>
                    {cartProducts.length <= 0 ? null : (
                        <DrawerFooter
                            px={{ base: "1em" }}
                            py={{ base: "1em" }}
                            borderTop="1px solid #ccc"
                            display="flex"
                            flexDirection="column"
                        >
                            <Text mb={{ base: "0.15em" }} fontSize={14} color="var(--dim-gray)" fontWeight="200">
                                Inclusive of all shipping & taxes.
                            </Text>
                            <Link to="/checkout" className="checkout-button">
                                CHECKOUT - RS. {totalCost}
                            </Link>
                        </DrawerFooter>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CartDrawer);
