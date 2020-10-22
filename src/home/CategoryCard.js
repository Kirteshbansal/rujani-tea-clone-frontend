import React, { Component } from "react";
import { Box, Button, Heading, Stack } from "@chakra-ui/core";
import { Link } from "react-router-dom";

class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cardData } = this.props;
    return (
      <>
        <Box
          w="31%"
          h={580}
          m={15}
          background={`linear-gradient(to top, rgba(4,4,4,0.65), rgba(54,54,54,0.2)), url(${cardData.image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="175%"
          boxShadow="0 0 2px #666"
        >
          <Stack position="relative" top="73%" left="9%">
            <Heading
              as="h2"
              color="white"
              fontSize={24}
              fontWeight="400"
              letterSpacing={3}
              style={{ wordSpacing: "5px" }}
              className="font-montserrat"
            >
              {cardData.name}
            </Heading>
            <Link to={cardData.linkTo} className="hero-button button-lw">
              VIEW PRODUCTS
            </Link>
          </Stack>
        </Box>
      </>
    );
  }
}

export default CategoryCard;
