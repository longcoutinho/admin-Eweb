import {Box, Link} from "@mui/material";
import React, {useState} from "react";

export default function ListItem(props: any) {
    const [itemIdLv1, setItemIdLv1] = useState<number>();
    const [itemIdLv2, setItemIdLv2] = useState<number>();
    return (
        <Box className="list-item-container">
            <p>Hello</p>
        </Box>
    );
}
