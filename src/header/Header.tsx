import {appConstants} from "../shared/constants/constants";
import {connect, useSelector} from "react-redux";
import { NavLink } from 'react-router-dom';
import "./Header.scss";

const Header = () => {

    const headerState = useSelector((state:any)=>state?.user);

    console.log('headerstate:', headerState);

    return (
        <header>
            <nav className="navbar navbar-light navbar-expand-sm">
                <span className="navbar-brand" >Interview Scheduler</span>
                {
                    headerState?.user?.user?.role?.role=='hr' &&
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink to={appConstants.importRoute} className="nav-link">Upload</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={appConstants.chartRoute} className="nav-link">Chart</NavLink>
                        </li>
                    </ul>
                }
                {
                    headerState?.isLogin &&
                    <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink to={appConstants.appointmentRoute} className="nav-link">Appointments</NavLink>
                    </li>
                    </ul>
                }
                {
                    ! headerState?.isLogin?
                    <ul className="nav navbar-nav" style={{marginLeft: 'auto'}}>
                    <NavLink to={appConstants.loginRoute} className="nav-link">Login</NavLink>
                    </ul>
                        :
                    <ul className="nav navbar-nav" style={{marginLeft: 'auto'}}>
                        <NavLink to={appConstants.logoutRoute} className="nav-link">Logout</NavLink>
                    </ul>
                }
            </nav>
        </header>
    )
}

export default connect()(Header);


// import React, {FC, useState} from 'react';
// import {connect, useSelector} from "react-redux";
// import {Menu} from "antd";
// import {withRouter} from "react-router-dom";
//
// const Header: FC<HeaderProps> = ({ history }) => {
//
//     const userState = useSelector((state:any) => state);
//
//     console.log("userstate in Header:",userState);
//
//     const [current, setCurrent] = useState("");
//
//     const handleClick = (e: any) => {
//         console.log("click ", e);
//         setCurrent(e.key);
//         history.push(e.key);
//     };
//
//     return (
//         <header>
//             <nav>
//                 <div>
//                     <span>Interview Scheduler System</span>
//                 </div>
//                 <Menu
//                     onClick={(e) => handleClick(e)}
//                     selectedKeys={[current]}
//                     mode="horizontal"
//                     defaultSelectedKeys={["/login"]}
//                 >
//                     <Menu.Item key="/login">Login</Menu.Item>
//                 </Menu>
//             </nav>
//         </header>
//     );
// }
//
// export default withRouter(connect()(Header));
//
// interface HeaderProps {
//     history?: any;
// }