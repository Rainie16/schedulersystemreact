import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const authReducer = (state: any = null, action: authReducerAction) => {

    const newState = {...state};

    switch (action.type) {
        case appConstants.LOGIN:
            console.log('login reducer:',action.payload.data )
            newState.isLogin = action.payload.data.success ? true : false;
            return newState;
        case appConstants.LOGOUT:
            return null;
        case appConstants.CHECKLOGIN:
            newState.user = action.payload.data;
            return newState;
        default:
            return state;
    }
}

interface authReducerAction {
    type: string,
    payload: AxiosResponse<any>
}