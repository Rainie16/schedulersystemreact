import axios from "axios";
import {appConstants} from "../shared/constants/constants";

export const passRate = () => {
    console.log('passrate action');
    const passRatePromise = axios.get(
        `${process.env.REACT_APP_API}/interviews/passrate`,
        {withCredentials:true}
    )
    return {
        type: appConstants.GET_PASS_RATE,
        payload: passRatePromise
    }
}