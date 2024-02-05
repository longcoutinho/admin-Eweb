import {Backend, ItemService} from "@/constants";
import {doGetRequest, doPostRequest} from "@/constants/FnCommon";
import {ItemType} from "@/interfaces/request";

const getItemsData = async (requestParams: any) => {
    const url = Backend.URL + ItemService.getItems;
    if (requestParams == null) requestParams = {}
    return await doGetRequest(url, requestParams);
}

export const getAllItems = async () => {
    let res = await getItemsData(null);
    return res;
}

export const createNewItemType = async (request: ItemType) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type/create';
    return doPostRequest(url, request);
}

export const getItemTypeByLevel = async (level: number) : Promise<any> => {
    const url = Backend.ITEM_SERVICE + '/type/' + level.toString();
    return doGetRequest(url, null);
}