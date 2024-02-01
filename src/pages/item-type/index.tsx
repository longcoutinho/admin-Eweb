import {PAGE_TITLE, PageURL} from "@/constants";
import Page from "@/layouts";
import {Box, MenuItem, Select} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React from "react";

export default function ItemTypeComponent() {

    return (
        <Page title={PAGE_TITLE.HOME} menuIndex={1}>
            <Box className="item-type-page-content" sx={{ width: "100vw" }}>
                <p>Item Type Level 1</p>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <p>Item Type Level 2</p>
            </Box>
        </Page>
    );
}
