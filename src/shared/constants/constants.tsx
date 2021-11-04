import {User} from "../models/user";
import {Interview} from "../models/interview";

export const appConstants = {

    // routes
    loginRoute: '/login',
    appointmentRoute: '/appointments',
    logoutRoute: '/logout',
    addInterviewRoute: '/add-interview',
    uploadFileRoute: '/upload',
    importRoute: '/import-interviews',
    chartRoute: '/summary-chart',

    // actions
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    CHECKLOGIN: 'CHECKLOGIN',
    GET_INTERVIEWS: 'GET_INTERVIEWS',
    ADD_INTERVIEW: 'ADD_INTERVIEW',
    UPDATE_INTERVIEW_STATUS: 'UPDATE_INTERVIEW_STATUS',
    UPLOAD_RESUME: 'UPLOAD_RESUME',
    IMPORT_EXCEL: 'IMPORT_EXCEL',
    INTERVIEW_AMOUNT_BY_SCHEDULER: 'INTERVIEW_AMOUNT_BY_SCHEDULER',
    GET_PASS_RATE: 'GET_PASS_RATE',
}

export interface ReduxState {
    user: User,
    interview: Interview
}