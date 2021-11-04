import {appConstants} from "../shared/constants/constants";
import {AxiosResponse} from "axios";


export const barReducer = (state: any | null = null, action: barAction) => {
    switch(action.type) {
        case appConstants.GET_PASS_RATE:
            return action.payload.data;
        default:
            return state;
    }
}

interface barAction {
    type: string,
    payload: AxiosResponse<any>
}