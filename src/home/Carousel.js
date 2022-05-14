import React from "react";
import Slider from "react-slick";
import { Box, Heading, Stack, Text, ScaleFade } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import routes from "../routes/routes";

const slidesData = [
    {
        id: "1",
        imgUrl: "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Banner_1_2000x.jpg?v=1591156968",
        title: "Small Batches | Big Flavours",
        subTitle: "Buy Handcrafted Award Winning Artisanal Teas",
    },
    {
        id: "2",
        imgUrl: "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Banner_3_2000x.JPG?v=1591157309",
        title: "Single Origin | Community Focussed",
        subTitle: "Truly Farm to Cup",
    },
    {
        id: "3",
        imgUrl: "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Banner_5_2000x.jpg?v=1591157482",
        title: "LOOSE LEAF | NO BAGS",
        subTitle: "Award winning teas",
    },
    {
        id: "4",
        imgUrl: "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Amanda_8_2000x.jpg?v=1610943583",
        title: "Enjoyable | Accessible",
        subTitle: "Makes for a relaxing everyday ritual",
    },
];

const Carousel = (props) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        focusOnSelect: false,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 5000,
        cssEase: "ease",
        pauseOnHover: false,
        className: "hero-slider",
    };

    return (
        <>
            <Slider {...settings}>
                {slidesData.map((slide) => {
                    return (
                        <ScaleFade key={slide?.id} initialScale={0.9} in={true}>
                            <Box
                                background={`linear-gradient(to top, rgba(4,4,4,0.65), rgba(54,54,54,0.2)), url(${slide.imgUrl})`}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat"
                                backgroundAttachment="scroll"
                                backgroundSize="110% 160%"
                                h={{ base: "75vh", md: "80vh" }}
                            >
                                <ScaleFade initialScale={0.85} in={true}>
                                    <Stack
                                        className="font-montserrat text-white"
                                        position="absolute"
                                        bottom={{ base: "9%", sm: "11%" }}
                                        left={{ base: "5%" }}
                                    >
                                        <Text
                                            textTransform="uppercase"
                                            fontWeight="500"
                                            letterSpacing={2}
                                            fontSize={"12px"}
                                            fontStyle="normal"
                                            m={0}
                                        >
                                            {slide?.title}
                                        </Text>
                                        <Heading
                                            as="h4"
                                            lineHeight="1.2"
                                            fontWeight="400"
                                            fontSize={{ base: "20px", md: "22px" }}
                                            letterSpacing="3px"
                                            textTransform="uppercase"
                                            height="max-content"
                                            fontFamily="Montserrat !important"
                                            mt={{ base: "16px !important" }}
                                            mb={{ base: "14px !important" }}
                                            pr={{ base: "24px" }}
                                        >
                                            {slide?.subTitle}
                                        </Heading>
                                        <Link
                                            to={routes.products}
                                            className="primary-btn button-mw"
                                            style={{ margin: 0 }}
                                        >
                                            SHOP NOW
                                        </Link>
                                    </Stack>
                                </ScaleFade>
                            </Box>
                        </ScaleFade>
                    );
                })}
            </Slider>
        </>
    );
};

export default Carousel;
