import axios from "axios";
import {appConstants} from "../shared/constants/constants";

export const amountByScheduler = () => {
    console.log('amount by scheduler');
    const amountBySchedulerPromise = axios.get(
        `${process.env.REACT_APP_API}/interviews/totalbyscheduler`,
        {withCredentials:true}
    )
    return {
        type: appConstants.INTERVIEW_AMOUNT_BY_SCHEDULER,
        payload: amountBySchedulerPromise
    }
}