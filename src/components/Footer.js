import React, { Component } from "react";
import { Flex, Stack, Text, Heading, Icon } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Flex pt={75} pb={42}>
          <Flex px={80}>
            <Stack w="29%" mb={50}>
              <Heading
                as="h6"
                size="xs"
                color="var(--nero-black)"
                fontWeight="500"
                letterSpacing="1.8px"
                fontSize={14}
              >
                ABOUT THE SHOP
              </Heading>
              <Text
                fontSize={13}
                color="var(--dim-gray)"
                mt="20px"
                lineHeight={2}
              >
                The story of Rujani Tea, started with a dream and a passion to
                bring the wonders of loose-leaf Assam tea to tea lovers across
                the world.{" "}
                <span className="strong-text">
                  We are fourth generation tea planters and have been producing
                  award winning teas since 1897.
                </span>
              </Text>
              <Text
                fontSize={13}
                color="var(--dim-gray)"
                lineHeight="1.6"
                mt="20px"
                lineHeight={2}
              >
                Assam tea is perceived to be just "tea in a bag". We hope to
                change that perception by{" "}
                <span className="strong-text">
                  bringing you a range of speciality teas, from our tea farm to
                  your cup.
                </span>
              </Text>
              <Flex mt={14}>
                <Link as="a" to="#">
                  <Icon
                    as={RiFacebookFill}
                    size={5}
                    color="var(--dim-gray)"
                    mr={10}
                  ></Icon>
                </Link>
                <Link as="a" to="#">
                  <Icon
                    as={RiInstagramLine}
                    size={5}
                    color="var(--dim-gray)"
                  ></Icon>
                </Link>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </>
    );
  }
}

export default Footer;
