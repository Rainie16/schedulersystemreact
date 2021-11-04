import {Interview} from "../shared/models/interview";
import {AxiosResponse} from "axios";
import {appConstants} from "../shared/constants/constants";

export const interviewsReducer = (state: Interview[] | null = null, action: interviewAction) => {

    switch(action.type) {
        case appConstants.GET_INTERVIEWS:
            console.log('getInterviewReducer:',action.payload.data )
            return action.payload.data;
        case appConstants.ADD_INTERVIEW:
            console.log('addinterview reducer:', state);
            return state;
        case appConstants.UPDATE_INTERVIEW_STATUS:
            console.log("update status reducer",state)
            return state;
        case appConstants.UPLOAD_RESUME:
            console.log('upload resume reducer', state)
            return state;
        case appConstants.IMPORT_EXCEL:
            console.log('import excel reducer', state)
            return state;
        default:
            return state;
    }
}

interface interviewAction {
    type: string,
    payload: AxiosResponse<any>
}