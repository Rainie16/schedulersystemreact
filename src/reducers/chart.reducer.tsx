import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const chartReducer = (state: any | null = null, action: chartAction) => {
    switch(action.type) {
        case appConstants.INTERVIEW_AMOUNT_BY_SCHEDULER:
            return action.payload.data;
        default:
            return state;
    }
}

interface chartAction {
    type: string,
    payload: AxiosResponse<any>
}
