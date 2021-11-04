import axios from "axios";
import {appConstants} from "../shared/constants/constants";
import {Interview} from "../shared/models/interview";

export const getInterviews = () => {
    const getInterviewsPromise = axios.get(
        `${process.env.REACT_APP_API}/interviews`,
        {withCredentials: true}
    )
    console.log('getinterview action');
    return {
        type: appConstants.GET_INTERVIEWS,
        payload: getInterviewsPromise
    }
}

export const addInterview = (interview: Interview) => {
    const addInterviewPromise = axios.post(
        `${process.env.REACT_APP_API}/interviews`,
        interview,
        {withCredentials: true}
    )

    console.log('addinterviewaction', interview);
    return {
        type: appConstants.ADD_INTERVIEW,
        payload: addInterviewPromise
    }
}

export const updateInterviewStatus = (id: number | undefined, status: string) => {
    console.log('update status action:',status);
    const updateInterviewStatusPromise = axios.put(
        `${process.env.REACT_APP_API}/interviews/${id}/${status}`,
    )

    return {
        type: appConstants.UPDATE_INTERVIEW_STATUS,
        payload: updateInterviewStatusPromise
    }
}

export const uploadResume = (id: number | undefined, file: any) => {
    console.log('upload resume action', file)
    const uploadResumePromise = axios.post(
        `${process.env.REACT_APP_API}/resumes/upload/${id}`,
        file,
        {withCredentials: true}
    )
    return {
        type: appConstants.UPLOAD_RESUME,
        payload: uploadResumePromise
    }
}

export const importExcel = (file: any) => {
    console.log('import excel action');
    const importExcelPromise = axios.post(
        `${process.env.REACT_APP_API}/interviews/import`,
        file,
        {withCredentials:true}
    )
    return {
        type: appConstants.IMPORT_EXCEL,
        payload: importExcelPromise
    }
}
