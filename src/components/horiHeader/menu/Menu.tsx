import React from "react";
import {Box} from "@mui/material";
import {menuBar} from "@/constants/menu";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Menu() {
    const listMenu = menuBar.map((menu, index) => (
        <Box key={index}>
            {!menu.child ? <p>{menu.title}</p> :
                <Box sx={{display: "flex", flexDirection: "row", padding: "10px", border: "1px solid white"}}>
                    <p>{menu.title}</p>
                    <ArrowDownwardIcon></ArrowDownwardIcon>
                </Box>
            }
            {menu.child?.map((menuChild, index2) => (
                <Box key={index2} sx={{padding: "5px", border: "1px solid white"}}>
                    <p>{menuChild}</p>
                </Box>
            ))}
        </Box>
    ));
    return (
        <Box className="big-menu">
            {listMenu}
        </Box>
    );
};
