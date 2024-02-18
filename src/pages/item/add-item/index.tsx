import {Box, Button, Input} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useState} from "react";
import {HTTP_STATUS, PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import ItemTypeComponent from "@/pages/item/type/ItemType";
import {createNewItem} from "@/services/item";

export default function AddItemComponent() {
    const [itemLevel1, setItemLevel1] = useState<number>();
    const [itemLevel2, setItemLevel2] = useState<number>();
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemListImages, setItemListImages] = useState<File | null>(null);

    const changeParentChooseItemId = (itemId: number, level: number) => {
        if (level == 1) {
            setItemLevel1(itemId);
        }
        else if (level == 2) {
            setItemLevel2(itemId);
        }
    }

    const createItem = () => {
        const request = new FormData();
        request.append('price', itemPrice);
        request.append('name', itemName);
        if (itemLevel1 != undefined) request.append('lv1Id', itemLevel1.toString());
        if (itemLevel2 != undefined) request.append('lv2Id', itemLevel2.toString());
        if (itemListImages != null) request.append('listImages', itemListImages);

        createNewItem(request).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    console.log('ok');
                }
            }).catch((err) => {
            console.log(err.response.data);
        });
    }

    return <Page title={PAGE_TITLE.HOME} menuIndex={1}>
        <Box>
            <Box>
                <p className="label">Item Name</p>
                <Input type="text"
                       onChange={(e) => setItemName(e.target.value)}/>
            </Box>
            <Box>
                <ItemTypeComponent display={false}
                                   level={1}
                                   parentId={null}
                                   changeParentChooseItemId={changeParentChooseItemId}>
                </ItemTypeComponent>
            </Box>
            <Box>
                <ItemTypeComponent display={false}
                                   level={2}
                                   parentId={itemLevel1}
                                   changeParentChooseItemId={changeParentChooseItemId}>
                </ItemTypeComponent>
            </Box>
            <Box>
                <p className="label">Item Image</p>
                <Input type="file" onChange={(e :React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files != null) setItemListImages(e.target.files[0]);
                }}></Input>
            </Box>
            <Box>
                <p className="label">Item Price</p>
                <Input type="text"
                       onChange={(e) => setItemPrice(e.target.value)}/>
            </Box>
            <Button variant="contained" onClick={createItem}>Add Item</Button>
        </Box>
    </Page>;
}
