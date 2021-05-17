import React from "react";
import {
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

const CartItem = (props) => {
    const { product, removeProductHandler, productQuantityHandler } = props;
    return (
        <>
            <Flex alignItems="center" mb={5} key={product.id}>
                <Box w="38%" mr={4} boxShadow="md">
                    <Image src={product.image} />
                </Box>
                <Stack w="60%">
                    <Text
                        className="font-montserrat"
                        fontSize={15}
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
