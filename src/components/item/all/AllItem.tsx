import {Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {Item} from "@/interfaces/response";
import {getAllItem} from "@/services/item";
import {HTTP_STATUS} from "@/constants";

export default function AllItem(props: any) {
    const [listItems, setListItems] = useState<Item[]>([]);
    useEffect(() => {
        if (props.lv1Id !== undefined && props.lv2Id !== undefined) {
            renderListItem();
        }
    }, [props.lv1Id, props.lv2Id])

    const renderListItem = () => {
        getAllItem(props.lv1Id, props.lv2Id).then(
            (res) => {
                if (res.status == HTTP_STATUS.OK) {
                    setListItems(res.data);
                }
            }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <Box>
            {
                listItems.map((item, index) => (
                    <Box key={index}>
                        <p className="text-black">{item.name}</p>
                        <p className="text-black">{item.price}</p>
                        <img src="http://localhost:8989/image/4"/>
                    </Box>
                ))
            }
        </Box>
    );
}
