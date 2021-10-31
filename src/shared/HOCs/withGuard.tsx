import {RouteComponentProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {appConstants, ReduxState} from "../constants/constants";
import {useEffect} from "react";

export const withGuard = (OldComponent: any) => {
    const HOCComponent = (props: RouteComponentProps) => {
        const user = useSelector(({user}: ReduxState) => user);

        useEffect(() => {
            !user && props.history.push(appConstants.loginRoute)
        }, []);
        return (
            user?
            <OldComponent {...props}/>:
                <h4>Navigating...</h4>
        );
    }
    return HOCComponent;
};