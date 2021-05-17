import React from "react";
import { Stack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const SkeletonComp = (props) => {
    const skeletons = [...new Array(5)].map((e, index) => (
        <Skeleton key={index + 1} height={["15px", null, "18px"]} my={12} startColor="#f2f2f2" endColor="#C8C8C8" />
    ));

    const { hideSkeletonCircle } = props;
    return (
        <>
            <Stack w="85%" justifyContent="center">
                {!hideSkeletonCircle && (
                    <SkeletonCircle size={["7", null, "9"]} mb={2} startColor="#f2f2f2" endColor="#C8C8C8" />
                )}
                {skeletons}
            </Stack>
        </>
    );
};

export default SkeletonComp;
