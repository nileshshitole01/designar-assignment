import React from 'react';
import SearchIcon from '../../assets/images/Search.svg';
import DarkModeIcon from '../../assets/images/DarkMode.svg';
import NotificationIcon from '../../assets/images/NotificationsNone.svg'
import './style.scss';

const AppHeader = () => {
    return <div className="app-header-container">
        <div className="icon-view">
            <img src={SearchIcon} alt="SearchIcon" />
        </div>
        <div className="icon-view">
            <img src={DarkModeIcon} alt="DarkModeIcon" />
        </div>
        <div className="icon-view">
            <img src={NotificationIcon} alt="NotificationIcon" />
            <div className="badge"></div>
        </div>
        <div className="icon-view">
            <div className="user-name">User Name</div>
            <div className="user-role">User Role</div>
        </div>
        <div className="icon-view">
            <div className="profic-pic"></div>
        </div>
    </div>
}

export default AppHeader;