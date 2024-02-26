import {Box} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import {Item} from "@/interfaces/response";
import {getAllItem} from "@/services/item";
import {Backend, Frontend, HTTP_STATUS} from "@/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faEdit} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {redirectUrl} from "@/constants/FnCommon";

export default function AllItem(props: any) {
    const [listItems, setListItems] = useState<Item[]>([]);
    const router = useRouter();
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

    const redirectAddPage = () => {
        redirectUrl(router, Frontend.ADD_ITEM_PAGE, null);
    }

    const redirectEditPage = (itemId: number) => {
        redirectUrl(router, Frontend.EDIT_ITEM_PAGE, {id: itemId});
    }

    return (
        <Box className="flex flex-row flex-wrap gap-10 p-10 justify-items-center">
            {
                listItems.map((item, index) => (
                    <Box className="w-1/5 min-w-40 relative" key={index}>
                        <Box>
                            <img className="h-52 object-cover" src={Backend.IMAGE_SERVICE + '/' + item.listImageIds[0].toString()}/>
                        </Box>
                        <Box>
                            <p className="text-black">{item.name}</p>
                            <p className="text-black">{item.price}</p>
                        </Box>
                        <FontAwesomeIcon className="text-black text-5xl cursor-pointer absolute top-0" icon={faEdit} onClick={() => redirectEditPage(item.id)}></FontAwesomeIcon>
                    </Box>
                ))
            }
            <Box className="w-2 min-w-40 cursor-pointer" onClick={redirectAddPage}>
                <Box className="w-full h-full flex items-center justify-items-center">
                    <FontAwesomeIcon className="text-black text-5xl" icon={faPlus}></FontAwesomeIcon>
                </Box>
            </Box>
        </Box>
    );
}

