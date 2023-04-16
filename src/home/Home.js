import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
    Box,
    Flex,
    Link,
    Icon,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Heading,
    Button,
    Text,
    Stack,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import Carousel from "./Carousel";
import CollectionCard from "../collections/CollectionCard";
import Layout from "../components/Layout/Layout";
import Reviews from "./Reviews";
import routes from "../routes/routes";
import SkeletonComp from "../components/Common/SkeletonComp";
import { fetchCollections } from "../collections/collectionsSlice";
import { fetchProducts } from "../products/productsSlice";
import { fetchProductsByCollection } from "../collection/collectionSlice";

const Home = (props) => {
    const scrollBtnRef = useRef(null);
    const {
        announcementText,
        fetchCollections,
        collections,
        collectionsLoading,
        fetchProducts,
        fetchProductsByCollection,
    } = props;

    useEffect(() => {
        if (Object.keys(props.collections).length === 0) {
            fetchCollections();
        }
        if (Object.keys(props.products).length === 0) {
            fetchProducts();
        }
        // await fetchProductsByCollection(5);
        // await fetchProductsByCollection(3);
    }, []);

    const executeScroll = () => scrollBtnRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <Box>
            <Layout
                showHeader={true}
                showFooter={true}
                showAnnouncement={true}
                announcementText={announcementText}
                errorBoundary={false}
            >
                <Box
                    overflowX="hidden"
                    overflowY="hidden"
                    h={{ base: "auto" }}
                    background="linear-gradient(to top, #efefef ,#ffffff)"
                    position="relative"
                    pb={{ base: "1.875em" }}
                >
                    <Carousel />
                    <Link
                        as="button"
                        position="absolute"
                        bg="var(--white)"
                        color="var(--carbon-black)"
                        display="inline-block"
                        bottom={{ base: "2.4%", md: "1.5%" }}
                        left={{ base: "50%" }}
                        className="next-sec-btn"
                        p={{ base: "10px", md: "12px" }}
                        borderRadius="full"
                        h="max-content"
                        boxShadow="0 2px 10px rgb(54 54 54 / 15%)"
                        transform="translateX(-50%) scale(1,1)"
                        transition="transform 0.15s ease"
                        _hover={{
                            transform: {
                                base: "translateX(-50%)",
                                lg: "translateX(-50%) scale(1.08, 1.08)",
                            },
                        }}
                        onClick={executeScroll}
                    >
                        <Icon as={BsChevronDown} className="next-sec-btn__icon" fontWeight="bold" fontSize="25px" />
                    </Link>
                </Box>
                <Box py={{ base: "50px", lg: "80px" }} className="best-sellers-sec" ref={scrollBtnRef}>
                    <Heading
                        as="h2"
                        textTransform="uppercase"
                        align="center"
                        fontSize="xs"
                        color="var(--carbon-black)"
                        fontWeight="500"
                        letterSpacing="0.2em"
                        lineHeight="1.65"
                        mb="0.75em"
                        userSelect="none"
                    >
                        Our best sellers
                    </Heading>
                    <Tabs>
                        <TabList w="auto" borderBottom="unset" justifyContent="center" color="var(--carbon-black)">
                            <Tab
                                fontSize="20px"
                                px="0.1em"
                                _selected={{ color: "var(--carbon-black)", borderBottomColor: "var(--carbon-black)" }}
                                mr={{ base: "0.75em", md: "1em" }}
                                letterSpacing={{ base: "0.12em", sm: "0.2em" }}
                                fontWeight="500"
                            >
                                WHITE TEA
                            </Tab>
                            <Tab
                                fontSize="20px"
                                px="0.1em"
                                ml={{ base: "0.75em", md: "1em" }}
                                letterSpacing={{ base: "0.12em", sm: "0.2em" }}
                                fontWeight="500"
                                _selected={{ color: "var(--carbon-black)", borderBottomColor: "var(--carbon-black)" }}
                            >
                                BLACK TEA
                            </Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Button
                        variant="solid"
                        bg="var(--nero-black)"
                        rounded={0}
                        mt={{ base: "40px" }}
                        color="#fff"
                        border="1px solid var(--nero-black)"
                        fontSize={14}
                        fontWeight="400"
                        letterSpacing={2}
                        verticalAlign="middle"
                        px={8}
                        mx="auto"
                        d="flex"
                        w="max-content"
                        maxW="max-content"
                        textTransform="uppercase"
                        transition="all 0.2s ease-out"
                        _hover={{
                            outline: "none",
                            bg: "transparent",
                            color: "var(--nero-black)",
                            border: "1px solid var(--nero-black)",
                        }}
                        _focus={{ outline: "none" }}
                        onClick={() => props.history.push(routes.products)}
                    >
                        View all products
                    </Button>
                </Box>
                <Flex
                    background="#efefef"
                    flexWrap="wrap"
                    justifyContent="center"
                    overflowX="hidden"
                    pt={{ base: "", md: "8px" }}
                    pb={{ base: "16px", md: "35px" }}
                    px={{ lg: "10px", "2xl": "16px" }}
                >
                    {!collectionsLoading
                        ? collections.length > 0 &&
                        collections.map((card) => {
                            return <CollectionCard key={card?.id} cardData={card} />;
                        })
                        : new Array(6).fill(null).map((skeleton, index) => (
                            <Box
                                key={index + 1}
                                py={15}
                                px={{ base: "20px", md: "15px" }}
                                w={{ base: "100%", md: "49%", xl: "33.33%" }}
                                h={{ base: "530px", xl: "610px" }}
                                alignSelf="flex-end"
                                display="flex"
                                alignItems="flex-end"
                            >
                                <SkeletonComp numsOfStacks={12} width={"98%"} mt={"5px"} mb={"5px"} />
                            </Box>
                        ))}
                </Flex>

                <Reviews />

                <Stack
                    bg="linear-gradient(to top, rgba(4,4,4,0.2), rgba(54,54,54,0.2)),url('https://cdn.shopify.com/s/files/1/0287/1620/4135/files/IMG_6882_1500x.jpg?v=1592613213') no-repeat center scroll"
                    bgSize="cover"
                    h={{ base: "480px", md: "500px", xl: "600px" }}
                    color="var(--white)"
                    justifyContent="center"
                    alignItems="center"
                    px={{ base: "15px" }}
                    fontWeight="500"
                >
                    <Box maxW="400px">
                        <Text
                            align="center"
                            className="font-montserrat"
                            fontSize={{ base: "12px" }}
                            letterSpacing="3px"
                            fontWeight="600"
                        >
                            27.0460976°N, 95.0723523°E
                        </Text>
                        <Heading
                            as="h2"
                            align="center"
                            my={{ base: "16px !important" }}
                            className="font-montserrat"
                            fontSize={{ base: "20px" }}
                            letterSpacing="3px"
                            textTransform="uppercase"
                            lineHeight="1.8"
                            fontWeight="500"
                        >
                            From our tea farm in Assam to you, direct!
                        </Heading>
                        <Text
                            align="center"
                            lineHeight="1.6"
                            fontSize={{ base: "13px" }}
                            letterSpacing="1px"
                            fontWeight="700"
                        >
                            We aspire to be a tea brand of choice and without any intermediary: direct from our tea
                            farms in Assam to your cup.
                        </Text>
                    </Box>
                </Stack>
            </Layout>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        collections: [...state.collections.collections],
        collectionsLoading: state.collections.loading,
        products: [...state.products.products],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollections: (additionalData) => dispatch(fetchCollections(additionalData)),
        fetchProducts: () => dispatch(fetchProducts()),
        fetchProductsByCollection: (id) => dispatch(fetchProductsByCollection(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
