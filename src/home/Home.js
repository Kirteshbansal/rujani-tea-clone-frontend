import React, { Component } from "react";
import { Box, Flex } from "@chakra-ui/core";

import Carousel from "./Carousel";
import CategoryCard from "./CategoryCard";
import { categoryCardData } from "./categoryCardData";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Box
          overflowX="hidden"
          overflowY="revert"
          h="90vh"
          background="linear-gradient(to top, #efefef ,#ffffff)"
        >
          <Carousel />
        </Box>
        <Flex
          background="#efefef"
          flexWrap="wrap"
          justifyContent="center"
          overflowX="hidden"
          pt={8}
          pb={16}
        >
          {categoryCardData.map((card) => {
            return <CategoryCard key={card.id} cardData={card} />;
          })}
        </Flex>
      </>
    );
  }
}

export default Home;
