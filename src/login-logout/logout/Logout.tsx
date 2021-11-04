import React from 'react';
import {connect, useDispatch} from "react-redux";
import {logout} from "../../actions/auth.action";

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(logout());

    return (
        <h2>You are logout!</h2>
    );
}

export default connect()(Logout);
