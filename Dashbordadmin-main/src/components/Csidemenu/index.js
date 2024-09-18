import React from 'react'
import "./Csidemenu.css"
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GroupIcon from '@mui/icons-material/Group';
import DevicesIcon from '@mui/icons-material/Devices';
import AssignmentIcon from '@mui/icons-material/Assignment';
/*import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";*/
const CsideMenu = () => {
    return (
        <div className='sidemenu'>
            <div className='top'>
                <Link to="/" style={{ textDecoration: "none" }}>
                <img src="/hello.png" alt="A beautiful landscape" width="250" height="100"/>
                </Link>
            </div>
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span >Tableau de bord </span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to="/adposts" style={{ textDecoration: "none" }}>
                        <li>
                            <GroupIcon className="icon" />
                            <span> Utilisateurs</span>
                        </li>
                    </Link>
                    <Link to="/adposts" style={{ textDecoration: "none" }}>
                        <li>
                            <DevicesIcon className="icon" />
                            <span> Equipements</span>
                        </li>
                    </Link>
                    <Link to="/adposts" style={{ textDecoration: "none" }}>
                        <li>
                            <AssignmentIcon className="icon" />
                            <span>Intervention</span>
                        </li>
                    </Link>
                    <p className="title">SETTINGS</p>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'></div>
        </div>
    )
}
export default CsideMenu
