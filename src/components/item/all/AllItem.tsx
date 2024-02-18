import {Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect} from "react";

export default function AllItem(props: any) {
    useEffect(() => {
        if (props.level !== undefined && props.parentId !== undefined) {

        }
    }, [props.level, props.parentId])

    return (
        <Box className="bg-black w-50 h-50">
            <Box></Box>
        </Box>
    );
}
