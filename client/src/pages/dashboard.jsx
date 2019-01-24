/***********************************************************************************
 *  Purpose         : To render atlist onece and give the path of components.
 *  @file           : dashboard.jsx
 *  @author         : Jyotsana Khaparde
 *  @version        : 1.0
 *  @since          : 16/01/2019
 **********************************************************************************/
import React, { Component } from "react";
import DashboardInput from '../components/dashboardinput';
import { Button } from "@material-ui/core";
class Dashboard extends Component {
    logoutclick = (e) => {
        e.preventDefault();
        window.location.href = "login"
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 style={{ marginLeft: "207px" }}>Welcome to ChatApp</h1>
                    <Button id="logoutButton" onClick={this.logoutclick}>LOGOUT</Button>
                </div>
                <div>
                    <DashboardInput />
                </div>
            </div>
        )
    }
}
export default Dashboard;