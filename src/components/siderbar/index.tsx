import React from 'react';
import './style.scss';

const Siderbar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo-view">
                LOGO
            </div>
            <div className="menu-view">
                <div className="menu-item">
                    <div className="bullet-point" />
                    <div className="menu-text">Dummy1</div>
                </div>

                <div className="menu-item">
                    <div className="bullet-point" />
                    <div className="menu-text">Dummy2</div>
                </div>

                <div className="menu-item">
                    <div className="bullet-point" />
                    <div className="menu-text">Dummy3</div>
                </div>

                <div className="menu-item">
                    <div className="bullet-point" />
                    <div className="menu-text">Dummy4</div>
                </div>
            </div>
        </div>
    );
};

export default Siderbar;