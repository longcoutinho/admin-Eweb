import {PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useState} from "react";
import ItemTypeComponent from "@/pages/item/type/ItemType";
import ListItem from "@/pages/item/list-item/ListItem";

export default function ItemManagement() {
    const [itemLevel1, setItemLevel1] = useState<number>();
    const [itemLevel2, setItemLevel2] = useState<number>();

    const changeParentChooseItemId = (itemId: number, level: number) => {
        if (level == 1) {
            setItemLevel1(itemId);
        }
        else if (level == 2) {
            setItemLevel2(itemId);
        }
    }

    return (
        <Page title={PAGE_TITLE.HOME} menuIndex={1}>
            <ItemTypeComponent display={true} level={1} parentId={null} changeParentChooseItemId={changeParentChooseItemId}></ItemTypeComponent>
            <ItemTypeComponent display={true} level={2} parentId={itemLevel1} changeParentChooseItemId={changeParentChooseItemId}></ItemTypeComponent>
            <ListItem></ListItem>
        </Page>
  );
}
