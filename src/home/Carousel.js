import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Heading, Stack, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const images = [
  {
    name: "image 1",
    url:
      "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Banner_3_2000x.JPG?v=1591157309",
  },
  {
    name: "image 2",
    url:
      "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Banner_1_2000x.jpg?v=1591156968",
  },
  {
    name: "image 3",
    url:
      "https://cdn.shopify.com/s/files/1/0287/1620/4135/files/Banner_5_2000x.jpg?v=1591157482",
  },
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      focusOnSelect: false,
    };

    return (
      <>
        <Slider {...settings}>
          {images.map((image, i) => {
            return (
              <Box
                key={i + 1}
                background={`linear-gradient(to top, rgba(4,4,4,0.65), rgba(54,54,54,0.2)), url(${image.url})`}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundAttachment="scroll"
                backgroundSize="110% 160%"
                h="85vh"
              >
                <Stack
                  position="relative"
                  top="67%"
                  left="4%"
                  className="font-montserrat"
                >
                  <Text
                    color="#ffffff"
                    textTransform="uppercase"
                    fontWeight="600"
                    letterSpacing={2}
                    fontSize={13}
                    font-style="normal"
                  >
                    Small Batches | Big Flavours
                  </Text>
                  <Heading
                    mt={5}
                    as="h2"
                    textTransform="uppercase"
                    fontWeight="400"
                    fontSize={24}
                    letterSpacing={3}
                    color="#ffffff"
                    wordSpacing={15}
                  >
                    Buy Handcrafted Award Winning Artisanal Teas
                  </Heading>
                  <Link to="/collection/all" className="hero-button button-mw">
                    SHOP NOW
                  </Link>
                </Stack>
              </Box>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default Carousel;
