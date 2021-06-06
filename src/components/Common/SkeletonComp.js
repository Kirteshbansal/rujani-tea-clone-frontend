import React from "react";
import { Flex, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const SkeletonComp = (props) => {
    const { hideSkeletonCircle, numsOfStacks, width, mt, mb, borderRadius = 0, variableWidth = [] } = props;
    const skeletonStacks = numsOfStacks ? numsOfStacks : 5;
    const skeletons = [...new Array(skeletonStacks)].map((e, index) => (
        <Skeleton
            key={index + 1}
            height={["15px", null, "18px"]}
            w={variableWidth.length > 0 ? variableWidth[index] : "100%"}
            mt={mt}
            mb={mb ? mb : "0.75em"}
            startColor="#f2f2f2"
            endColor="#C8C8C8"
            borderRadius={borderRadius}
        />
    ));

    return (
        <>
            <Flex flexDir="column" w={width ? width : "85%"} mx="auto">
                {!hideSkeletonCircle && (
                    <SkeletonCircle size={["7", null, "9"]} mb={2} startColor="#f2f2f2" endColor="#C8C8C8" />
                )}
                {skeletons}
            </Flex>
        </>
    );
};

export default SkeletonComp;
