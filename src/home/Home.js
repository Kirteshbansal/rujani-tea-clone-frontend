import React, { Component } from "react";
import { Box } from "@chakra-ui/core";

import Corousel from "./Corousel";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Box overflowX="hidden" overflowY="revert" h="90vh">
          <Corousel />
        </Box>
      </>
    );
  }
}

export default Home;
