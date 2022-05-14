import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Heading, ScaleFade, Text, Flex } from "@chakra-ui/react";

const reviewsData = [
    {
        reviewText: "This (is) absolutely the best black tea I have tasted this year - even better than Jin Jun Mei.",
        testimonial: "Alexis Kaae,\nVice President - European Tea Society",
    },
    {
        reviewText:
            "Silver Pearl - my new addiction, watching the pearls unfurl is so calming. Fragrant, soft and so drinkable.",
        testimonial: "Thanks again, a new devoTEA,\nLeanne Blandford",
    },
    {
        reviewText:
            "I am enjoying it (Signature White). It has a floral warmth that is a nice substitute for my usual green teas I like in the morning. Perfect for the cooler days.",
        testimonial: "- Amanda Low, Melbourne Tea Sommelier",
    },
];

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews([...reviewsData]);
    }, []);

    let settings = {
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
        swipeToSlide: true,
        pauseOnHover: true,
        arrows: false,
        className: "reviews-slider",
    };

    return (
        <>
            <Slider {...settings}>
                {reviews?.length > 0 &&
                    reviews.map((review, i) => {
                        return (
                            <Box key={i + 1} bgColor="#20582b" color="#e8b05b" h={{ base: "19.875em", md: "24.75em" }}>
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    py={{ base: "3.125em", md: "5em" }}
                                    px={{ base: "1.5em", md: "2.5em" }}
                                    className="test"
                                    h={{ base: "19.875em", md: "24.75em" }}
                                    overflow="hidden"
                                >
                                    <Box maxW="32.5em" m={0} fontSize={{ base: "1.125em", sm: "1.25em" }}>
                                        <ScaleFade initialScale={0.6} in={true} height="fit-content">
                                            <Heading
                                                as="h2"
                                                fontSize="inherit"
                                                fontWeight="bold"
                                                fontStyle="italic"
                                                lineHeight="1.8"
                                                align="center"
                                                mb={{ base: "0.9em", sm: "1.2em" }}
                                            >
                                                {review?.reviewText}
                                            </Heading>
                                            <Box>
                                                {review?.testimonial.split("\n").map((textString, index) => (
                                                    <Text
                                                        key={index + 1}
                                                        align="center"
                                                        fontSize="inherit"
                                                        mt={index ? "1em" : 0}
                                                    >
                                                        {textString}
                                                    </Text>
                                                ))}
                                            </Box>
                                        </ScaleFade>
                                    </Box>
                                </Flex>
                            </Box>
                        );
                    })}
            </Slider>
        </>
    );
};

export default Reviews;
