import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";
import {interviewsReducer} from "./interviews.reducer";
import {chartReducer} from "./chart.reducer";
import {barReducer} from "./bar.reducer";

export const rootReducer = combineReducers( {
    user: authReducer,
    interview: interviewsReducer,
    chart: chartReducer,
    bar: barReducer
})