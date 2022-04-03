import React, { useState } from "react";
import { connect } from "react-redux";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Input,
    Icon,
    InputGroup,
    InputLeftElement,
    Stack,
    Heading,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { RiSearchLine } from "react-icons/ri";
import routes from "../routes/routes";

const SearchProducts = (props) => {
    const [matchedCollections, setMatchedCollections] = useState([]);
    const [matchedProducts, setMatchedProducts] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    const { onClose, compName, isOpen, collections, products } = props;

    const searchProductsHandler = (e) => {
        let searchedValue =
            e.target.value.toString().trim().length > 0 &&
            ![null, "", " ", undefined].includes(e.target.value) &&
            e.target.value;
        let filteredCollections =
            collections && collections.filter((collection) => collection?.name.toLowerCase().includes(searchedValue));
        let filteredProducts =
            products && products.filter((product) => product?.name.toLowerCase().includes(searchedValue));

        console.log("filteredCollections :>> ", filteredCollections);
        console.log("searchedValue :>> ", searchedValue);
        setMatchedCollections(filteredCollections);
        setMatchedProducts(filteredProducts);
        if (filteredCollections.length === 0 && filteredProducts.length === 0 && searchedValue.length > 0) {
            setErrMsg("Oops! No match found.");
        } else {
            setErrMsg("");
        }
    };

    const clearSearchHandler = () => {
        setMatchedCollections([]);
        setMatchedProducts([]);
    };

    return (
        <>
            <Modal
                onClose={() => onClose(compName)}
                size="xl"
                isOpen={isOpen}
                h="max-content"
                scrollBehavior={"inside"}
            >
                <ModalOverlay />
                <ModalContent bg="rgb(239, 239, 239)">
                    <ModalHeader>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                as="button"
                                children={
                                    <Icon as={RiSearchLine} fontSize={{ base: "19px", md: "24px" }} color="gray.400" />
                                }
                            />
                            <Input
                                type="text"
                                w={{ base: "calc(100% - 60px)" }}
                                placeholder="SEARCH..."
                                border="unset"
                                autoFocus
                                textTransform="uppercase"
                                fontSize={{ base: "16px", sm: "18px", md: "22px" }}
                                _focus={{ outline: "unset" }}
                                onChange={searchProductsHandler}
                            />
                        </InputGroup>
                    </ModalHeader>
                    <ModalCloseButton
                        fontSize={{ base: "18px", md: "24px" }}
                        mt={{ base: "11px" }}
                        color="gray.600"
                        onClick={clearSearchHandler}
                    />
                    {/* {!!matchedCollections.length && ( */}
                    <ModalBody py={0}>
                        {matchedCollections.length > 0 || matchedProducts.length > 0 ? (
                            <>
                                {matchedCollections.length > 0 && (
                                    <Stack my={"10px"}>
                                        <Heading
                                            as="h5"
                                            fontSize={{ base: "14px" }}
                                            borderBottom="1px solid var(--dim-gray)"
                                            fontWeight="600"
                                            letterSpacing="1px"
                                            pb="4px"
                                        >
                                            COLLECTIONS
                                        </Heading>
                                        {matchedCollections.map((collection) => (
                                            <Link
                                                key={collection.id}
                                                to={routes.category.replace(":id", collection.id)}
                                            >
                                                {collection.name}
                                            </Link>
                                        ))}
                                    </Stack>
                                )}
                                {matchedProducts.length > 0 && (
                                    <Stack my={"10px"}>
                                        <Heading
                                            as="h5"
                                            fontSize={{ base: "14px" }}
                                            borderBottom="1px solid var(--dim-gray)"
                                            fontWeight="600"
                                            letterSpacing="1px"
                                            pb="4px"
                                        >
                                            Products
                                        </Heading>
                                        {matchedProducts.map((product) => (
                                            <Link
                                                key={product.product_id}
                                                to={routes.product.replace(":id", product.product_id)}
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </Stack>
                                )}
                            </>
                        ) : (
                            errMsg.length > 0 && (
                                <Text fontSize={{ base: "14px", md: "16px" }} align="center" pb="8px">
                                    {errMsg}
                                </Text>
                            )
                        )}
                    </ModalBody>
                    {/* )} */}
                </ModalContent>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        collections: [...state.collections.collections],
        products: [...state.products.products],
    };
};

export default connect(mapStateToProps)(SearchProducts);
