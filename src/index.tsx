import React from 'react';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from "redux";
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import 'antd/dist/antd.css';
import {rootReducer} from "./reducers/root.reducer";
import ReactDOM from 'react-dom';
import {appConstants} from "./shared/constants/constants";
import Login from "./login-logout/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from "./login-logout/logout/Logout";
import AddInterview from "./interviews/add-interview/AddInterview";
import Interviews from "./interviews/Interviews";
import ImportExcel from "./import-excel-for-interviews/ImportExcel";
import PieChart from "./chart/PieChart";
import BarChart from "./chart/BarChart";
import SummaryChart from "./chart/SummaryChart";


const root = document.querySelector('#root');

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={appConstants.loginRoute} component={Login}/>
                    <Route path={appConstants.logoutRoute} component={Logout}></Route>
                    <Route path={appConstants.addInterviewRoute} component={AddInterview}></Route>
                    <Route path={appConstants.appointmentRoute} component={Interviews}></Route>
                    <Route path={appConstants.importRoute} component={ImportExcel}></Route>
                    <Route path={appConstants.chartRoute} component={SummaryChart}></Route>
                </Switch>
            </App>
        </BrowserRouter>

    </Provider>
    ,
    root
);

reportWebVitals();
