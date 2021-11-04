import axios from "axios";
import qs from "qs";
import {User} from "../shared/models/user";
import {appConstants} from "../shared/constants/constants";

export const login = (user: User) => {
    const loginPromise = axios.post (
        `${process.env.REACT_APP_API}/login`,
        qs.stringify(user),
        {withCredentials: true}
    );

    console.log('loginaction:', loginPromise);

    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    }
}

export const logout = () => {
    const logoutPromise = axios.post(
    `${process.env.REACT_APP_API}/logout`,
    null,
    {withCredentials: true}
    );

    return {
        type: appConstants.LOGOUT,
        payload: logoutPromise
    }

}

export const checkLogin = () => {
    const checkLoginPromise = axios.get(
        `${process.env.REACT_APP_API}/checklogin`
        , {withCredentials: true});

    return {
        type: appConstants.CHECKLOGIN,
        payload: checkLoginPromise
    }
};