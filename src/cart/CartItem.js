import React, { useState } from "react";
import {
    Button,
    Text,
    Flex,
    Box,
    Img,
    Stack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

import { loadingImage } from "../public/dist/imageURLs";

const CartItem = (props) => {
    const [loadingImg, setLoadingImg] = useState(true);
    const { product, removeProductHandler, productQuantityHandler } = props;
    return (
        <>
            <Flex alignItems="center" mb={5} key={product.id}>
                <Box w="38%" mr={4} boxShadow="md">
                    <Img
                        src={loadingImg ? loadingImage : product.image}
                        fallback={loadingImage}
                        onLoad={() => setLoadingImg(false)}
                    />
                </Box>
                <Stack w="60%">
                    <Text
                        className="font-montserrat"
                        fontSize={{ base: "0.8125em", sm: "0.9375em" }}
                        fontWeight="500"
                        letterSpacing={2}
                        textTransform="uppercase"
                    >
                        {product.name}
                    </Text>
                    <Text fontSize={12} fontWeight="300" letterSpacing={2} color="var(--dim-gray)">
                        100 GRAMS
                    </Text>
                    <Text fontSize={12} fontWeight="300" letterSpacing={2} color="var(--dim-gray)">
                        RS. {product.price}
                    </Text>
                    <Flex justifyContent="space-between" alignItems="flex-end">
                        <NumberInput
                            size="sm"
                            defaultValue={product.selectedQuantity}
                            min={1}
                            step={1}
                            w="88px"
                            border="1px solid var(--nero-black)"
                            onChange={(value) => productQuantityHandler(product.id, value)}
                        >
                            <NumberInputField
                                bg="transparent"
                                maxLength="3"
                                border="none"
                                _focus={{
                                    outline: "none",
                                }}
                            />
                            <NumberInputStepper zIndex={0}>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Button
                            variant="link"
                            bg="transparent"
                            fontWeight="300"
                            color="var(--dim-gray)"
                            _focus={{ outline: "none" }}
                            _hover={{
                                color: "var(--nero-black)",
                            }}
                            onClick={() => removeProductHandler(product.id)}
                        >
                            Remove
                        </Button>
                    </Flex>
                </Stack>
            </Flex>
        </>
    );
};

export default CartItem;
