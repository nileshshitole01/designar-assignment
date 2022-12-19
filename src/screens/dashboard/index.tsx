import React from 'react';
import Siderbar from '../../components/siderbar';
import AppHeader from '../../components/app-header';
import Button from '@mui/material/Button';
import BackArrowIcon from '../../assets/images/BackArrow.svg'
import './style.scss';

const Dashboard = () => {
    return <div className="dashboard-container">
        <Siderbar />
        <AppHeader />

        {/** Content View **/}
        <div className="content-view">
            {/* <div className="back">
                <img src={BackArrowIcon} alt="BackArrowIcon" />
            </div>
            <div className="header-title">Dummy :</div> */}
        </div>

        {/** Bottom Action Bar  **/}
        <div className='bottom-bar-view'>
            <div className="bottom-bar">
                <div className="left-section">
                    <Button variant="outlined" color="error" className='discard-btn'>Discard</Button>
                    <Button variant="outlined" className='dummy-btn'>Dummy</Button>
                </div>
                <div className="right-section">
                    <Button variant="contained" className='dummy-btn-continue'>Continue</Button>
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard;