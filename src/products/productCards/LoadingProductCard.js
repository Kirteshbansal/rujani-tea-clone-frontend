import React from "react";
import { Fade, Img, Flex, Box, SkeletonText } from "@chakra-ui/react";

import SkeletonComp from "../../components/Common/SkeletonComp";
import { loadingImage } from "../../public/dist/imageURLs";

const LoadingProductCard = ({ showSkeleton = true, w = { base: "45%", md: "30%", lg: "23%", xl: "21%" }, mx = 0 }) => {
    return (
        <Box mb={{ base: "2em" }} w={w} mx={mx}>
            <Flex flexDir="column" textAlign="center" boxShadow="0.5px 1px 2px #00000010">
                <Fade in={true}>
                    <Img src={loadingImage} w="100%" mb={"0.4125em"} />
                    {showSkeleton && (
                        <>
                            <SkeletonComp
                                hideSkeletonCircle={true}
                                numsOfStacks={2}
                                width={{ base: "94%", md: "96%" }}
                                mt="0"
                                variableWidth={[{ base: "67%", md: "75%" }]}
                                mb="0.375em"
                                borderRadius="0.6em"
                            />
                        </>
                    )}
                </Fade>
            </Flex>
        </Box>
    );
};

export default LoadingProductCard;
