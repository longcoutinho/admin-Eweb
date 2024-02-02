import {PAGE_TITLE, PageURL} from "@/constants";
import Page from "@/layouts";
import {Box, MenuItem, Select} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ItemTypeComponent() {

    return (
        <Page title={PAGE_TITLE.HOME} menuIndex={1}>
            <Box className="item-type-page-content" sx={{ width: "100vw" }}>
                <p className="item-type-title">Item Type Level 1</p>
                <Box className="add-item">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Box>
                <p className="item-type-title">Item Type Level 2</p>
                <Box className="add-item">
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </Box>
            </Box>
        </Page>
    );
}
