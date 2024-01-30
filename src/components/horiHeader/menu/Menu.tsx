import React, {useEffect, useState} from "react";
import {Box, Link} from "@mui/material";
import {menuBar} from "@/constants/menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    const [displayMatrix, setDisplayMatrix] = useState<number[]>([]);

    useEffect(() => {
        let initMatrix = [];
        for(let i = 0; i < menuBar.length; i++) {
            if (menuBar[i].child == null) {
                initMatrix[i] = 1;
            }
            else {
                initMatrix[i] = 0;
            }
        }
        setDisplayMatrix(initMatrix);
    }, [])

    const switchDisplayComponent = (ind: number) => {
        let newMatrix = displayMatrix;
        newMatrix[ind] = 1 - newMatrix[ind];
        setDisplayMatrix([...newMatrix]);
    }

    const listMenu = menuBar.map((menuElement, index) => (
        <Box key={index} className="menu-element-wrapper">
            {menuElement.type == 1 ? <p className="menu-element-title">{menuElement.title}</p> :
                <Box className="menu-element-content">
                    <FontAwesomeIcon icon={menuElement.icon}></FontAwesomeIcon>
                    <Box>
                        <p>{menuElement.title}</p>
                    </Box>
                    <FontAwesomeIcon onClick={() => switchDisplayComponent(index)} icon={faAngleDown}></FontAwesomeIcon>
                </Box>
            }
            {menuElement.child?.map((menuChild, index2) => (
                <Box key={index2} sx={{padding: "5px", border: "1px solid white", color: "white", display: displayMatrix[index] == 0 ? "none" : "flex" }}>
                    <Link href="/item">{menuChild}</Link>
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
