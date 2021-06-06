import React, { useState } from "react";
import { Flex, Img, List, ListItem, Text, Box, Heading, Fade } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import routes from "../../routes/routes";
import { loadingImage } from "../Common/Common";

const MegaMenu = (props) => {
    const { showMenu, hideMenuHandler } = props;

    return (
        <>
            <Fade in={true}>
                <Flex
                    position="absolute"
                    w={{ lg: "calc(100% + 100px)" }}
                    mx={{ lg: "-50px" }}
                    top={{ lg: "110px", xl: "75px" }}
                    left="0"
                    visibility={showMenu ? "visible" : "hidden"}
                    bg="white"
                    justifyContent="center"
                    onMouseLeave={hideMenuHandler}
                    border="1px solid #efefef90"
                    transition="visibility 50ms ease"
                    py={{ lg: "3em" }}
                    h="auto"
                    px={{ lg: "2.25%", xl: "5%" }}
                >
                    <Flex
                        justifyContent="space-between"
                        w="100%"
                        maxW={{ lg: "1080px", xl: "1250px", "2xl": "1320px" }}
                    >
                        <MenuBox>
                            <ListHeading title="CATEGORIES" />
                            <List>
                                <ListItemComp label="Award winners" path={routes.category.replace(":id", 1)} />
                                <ListItemComp label="Signature teas" path={routes.category.replace(":id", 2)} />
                                <ListItemComp label="All products" path={routes.products} />
                            </List>
                        </MenuBox>
                        <MenuBox>
                            <ListHeading title="BESTSELLERS" />
                            <List>
                                <ListItemComp label="Tippy Reverse" path={routes.product.replace(":id", 16)} />
                                <ListItemComp label="Morning Special" path={routes.product.replace(":id", 6)} />
                                <ListItemComp label="Royale Golden CTC" path={routes.product.replace(":id", 12)} />
                            </List>
                        </MenuBox>
                        <MenuBox>
                            <ListHeading title="BESTSELLERS" />
                            <List>
                                <ListItemComp label="Black Tea" path={routes.category.replace(":id", 3)} />
                                <ListItemComp label="White Tea" path={routes.category.replace(":id", 5)} />
                                <ListItemComp label="Green Tea" path={routes.category.replace(":id", 6)} />
                            </List>
                        </MenuBox>
                        <MenuBox>
                            <ListHeading title="WHOLESALE" />
                            <List>
                                <ListItemComp label="Inquiry" path={routes.contact} />
                            </List>
                        </MenuBox>
                        <ImageItem
                            title="ROSE GREEN"
                            text="BACK IN STOCK"
                            path={routes.product.replace(":id", 11)}
                            img="https://cdn.shopify.com/s/files/1/0287/1620/4135/collections/Rose_Green_Tea_200x.jpg?v=1592641347"
                        />
                        <ImageItem
                            title="SILVER PEARL"
                            text="LABOUR OF LOVE"
                            path={routes.product.replace(":id", 9)}
                            img="https://cdn.shopify.com/s/files/1/0287/1620/4135/collections/Black_Pearl_200x.jpg?v=1592641550"
                        />
                    </Flex>
                </Flex>
            </Fade>
        </>
    );
};

const ListItemComp = (props) => {
    const { label, path } = props;
    return (
        <>
            <ListItem
                color="var(-charcoal)"
                _hover={{ color: "var(--dim-gray)" }}
                whiteSpace="nowrap"
                fontSize={{ lg: "1em" }}
                _notLast={{ mb: { lg: "1em" } }}
            >
                <Link to={path}>{label}</Link>
            </ListItem>
        </>
    );
};

const ListHeading = (props) => {
    const { title } = props;
    return (
        <>
            <Heading as="h6" fontWeight={500} fontSize={{ lg: "1em" }} letterSpacing={2} mb={{ lg: "1.35em" }}>
                {title}
            </Heading>
        </>
    );
};

const MenuBox = (props) => {
    return (
        <>
            <Box mr={{ base: "1em" }} fontWeight={400} fontSize={{ lg: "12px" }}>
                {props.children}
            </Box>
        </>
    );
};

const ImageItem = (props) => {
    const [imgLoad, setImgLoad] = useState(true);
    return (
        <>
            <Box _notLast={{ mr: { lg: "1em" } }}>
                <Link to={props?.path}>
                    <Flex flexDir="column" textAlign="center" fontWeight="400">
                        <Img
                            src={imgLoad ? loadingImage : props?.img}
                            maxW={300}
                            w={{ lg: "180px", xl: "250px", "2xl": "280px" }}
                            onLoad={() => setImgLoad(false)}
                        />
                        <Text letterSpacing={2} mt={4} color="var(--charcoal)" fontSize="12px" mb="0.875em">
                            {props?.title}
                        </Text>
                        <Text color="var(--dim-gray)" letterSpacing={2} fontSize="12px">
                            {props?.text}
                        </Text>
                    </Flex>
                </Link>
            </Box>
        </>
    );
};

export default MegaMenu;
