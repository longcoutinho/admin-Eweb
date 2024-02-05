import {Box, Button, Input, TextField} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";

export default function AddItemBox(props: any) {
    const [open, setOpen] = useState(0);
    useEffect(() => {
        setOpen(props.open);
    }, [props.open])
    return (
        <Box sx={{display: open > 0? 'block' :'none'}}>
            <Box className="overlay-container"></Box>
            <Box className="center-box">
                <p>Add item type level 1</p>
                <TextField label="Type name" variant="filled" />
                <TextField sx={{marginTop: "20px"}} label="Type code" variant="filled" />
                <Box className="center-box-button-container">
                    <Button variant="contained" color="success">Add</Button>
                    <Button onClick={() => setOpen(0)} variant="contained" color="error">Cancel</Button>
                </Box>
            </Box>
        </Box>
    );
}
