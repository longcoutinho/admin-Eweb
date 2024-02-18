import {Backend} from "@/constants";
import {doFileRequest, doGetRequest, doPostRequest} from "@/constants/FnCommon";
import {Item, ItemType} from "@/interfaces/request";

export const createNewItemType = async (request: ItemType) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type/create';
    return doPostRequest(url, request);
}

export const getItemTypeByLevelAndParentId = async (level: number, parentId: number | null) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type';
    const params = {
        level: level,
        parentId: parentId
    }
    return doGetRequest(url, params);
}

export const createNewItem = async (request: FormData) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/create';
    return doFileRequest(url, request);
}
