import {HTTP_STATUS, PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import {Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddItemBox from "@/components/addItemBox";
import {ItemType} from "@/interfaces/request";
import {getItemTypeByLevel} from "@/services/itemService";

export default function ItemTypeComponent() {
    const [openAddItemBox, setOpenItemBox] = useState(0);
    const [itemLevel, setItemLevel] = useState(0);
    const [listItemLv1, setListItemLv1] = useState<ItemType[]>([]);
    const [listItemLv2, setListItemLv2] = useState<ItemType[]>([]);
    const [parentId, setParentId] = useState<number>();

    useEffect(() => {
        getLv1ItemType();
        getItemTypeByLevel(2).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setListItemLv2(res.data);
                }
            }).catch((err) => {
            console.log(err);
        });
    }, [])

    const getLv1ItemType = () => {
        getItemTypeByLevel(1).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setListItemLv1(res.data);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Page title={PAGE_TITLE.HOME} menuIndex={1}>
            <Box className="item-type-page-content" sx={{ width: "100vw" }}>
                <p className="item-type-title">Item Type Level 1</p>
                <Box className="item-type-content-wrapper">
                    {
                        listItemLv1.map((itemType, index) => (
                            <Box onClick={() => setParentId(itemType.itemTypeId)} className="item-type-level-container" key={index}>
                                <p style={{color: 'black'}}>{itemType.name}</p>
                            </Box>
                        ))
                    }
                    <Box className="add-item" onClick={() => {
                        setOpenItemBox(openAddItemBox + 1)
                        setItemLevel(1);
                    }
                    }>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Box>
                </Box>
                <p className="item-type-title">Item Type Level 2</p>
                <Box className="item-type-content-wrapper">
                    {
                        listItemLv2.map((itemType, index) => (
                            <Box className="item-type-level-container" key={index}>
                                <p style={{color: 'black'}}>{itemType.name}</p>
                            </Box>
                        ))
                    }
                    <Box className="add-item" onClick={() => {
                        setOpenItemBox(openAddItemBox + 1)
                        setItemLevel(2);
                    }
                    }>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </Box>
                </Box>
            </Box>
            <AddItemBox resetLv1={getLv1ItemType} parentId={parentId} open={openAddItemBox} itemLevel={itemLevel}></AddItemBox>
        </Page>
    );
}
