import React from "react";
import { Box } from "@chakra-ui/react";

import Header from "../header/Header";
import Footer from "../Footer";
import Announcement from "../Announcement";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const Layout = (props) => {
    const { showHeader, showFooter, showAnnouncement, announcementText, errorBoundary = true } = props;

    return (
        <>
            {errorBoundary ? (
                <ErrorBoundary>
                    <Box>
                        {showAnnouncement && announcementText?.length && (
                            <Announcement announcementText={announcementText} />
                        )}
                        {showHeader && <Header />}
                        {props?.children}
                        {showFooter && <Footer />}
                    </Box>
                </ErrorBoundary>
            ) : (
                <Box>
                    {showAnnouncement && announcementText?.length && (
                        <Announcement announcementText={announcementText} />
                    )}
                    {showHeader && <Header />}
                    {props?.children}
                    {showFooter && <Footer />}
                </Box>
            )}
        </>
    );
};

export default Layout;
