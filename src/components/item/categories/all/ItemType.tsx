import {HTTP_STATUS} from "@/constants";
import {Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ItemType} from "@/interfaces/request";
import {getItemTypeByLevelAndParentId} from "../../../../services/item";
import AddItemType from "@/components/item/categories/add/AddItemType";

export default function ItemTypeComponent(props: any) {
    const [openAddItemBox, setOpenItemBox] = useState(false);
    const [listItem, setListItem] = useState<ItemType[]>([]);
    const [chosenId, setChosenId] = useState<number>();

    useEffect(() => {
        if (props.level !== undefined && props.parentId !== undefined) {
            renderListItem();
            setChosenId(props.parentId);
        }
    }, [props.level, props.parentId])

    const renderListItem = () => {
        getItemTypeByLevelAndParentId(props.level, props.parentId).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setListItem(res.data);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    const changeChosenId = (newId: number) => {
        setChosenId(newId);
        props.changeParentChooseItemId(newId, props.level);
        if (props.level == 1) {
            props.changeParentChooseItemId(null, 2);
        }
    }

    const CloseAddItemType = () => {
        setOpenItemBox(false);
    }

    return (
        <Box>
            <Box className="item-type-page-content">
                <p className="item-type-title">Type Level {props.level}</p>
                    {
                        (props.level == 2 && (props.parentId == undefined || null))
                        ? <p className="py-2 px-5">Choose an item type level 1</p> :
                            <Box className="item-type-content-wrapper py-2 px-5">
                                {
                                    listItem.map((itemType, index) => (
                                        <Box sx={{backgroundColor: itemType.itemTypeId == chosenId ? 'gray' : 'white'}}
                                             onClick={() => changeChosenId(itemType.itemTypeId)}
                                             className="item-type-level-container"
                                             key={index}>
                                            <p style={{color: 'black'}}>{itemType.name}</p>
                                        </Box>
                                    ))
                                }
                                <Box sx={{display: props.display ? 'inline-block' : 'none !important'}} className="add-item" onClick={() => setOpenItemBox(true)}>
                                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                </Box>
                            </Box>
                    }
            </Box>
            <AddItemType
                         renderListItem={renderListItem}
                         parentId={props.parentId}
                         open={openAddItemBox}
                         itemLevel={props.level}
                         closeAddItemType={CloseAddItemType}>
            </AddItemType>
        </Box>
    );
}
