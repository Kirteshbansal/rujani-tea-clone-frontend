import React from "react";
import { Stack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const SkeletonComp = (props) => {
    const { hideSkeletonCircle, numsOfStacks, width } = props;
    const skeletonStacks = numsOfStacks ? numsOfStacks : 5;
    const skeletons = [...new Array(skeletonStacks)].map((e, index) => (
        <Skeleton key={index + 1} height={["15px", null, "18px"]} my={12} startColor="#f2f2f2" endColor="#C8C8C8" />
    ));

    return (
        <>
            <Stack w={width ? width : "85%"} justifyContent="center">
                {!hideSkeletonCircle && (
                    <SkeletonCircle size={["7", null, "9"]} mb={2} startColor="#f2f2f2" endColor="#C8C8C8" />
                )}
                {skeletons}
            </Stack>
        </>
    );
};

export default SkeletonComp;
