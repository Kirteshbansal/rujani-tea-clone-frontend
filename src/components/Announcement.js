import React from "react";
import { Center, Text, Fade } from "@chakra-ui/react";

const Announcement = (props) => {
    const { announcementText } = props;
    return (
        <>
            <Center bg="blackAlpha.900" color="whiteSmoke" py={[1, 2, null, 3]} px={[14]} className="font-montserrat">
                <Fade in={true}>
                    <Text fontSize={[11, null, 12, 13]} align="center">
                        {announcementText}
                    </Text>
                </Fade>
            </Center>
        </>
    );
};

export default Announcement;
