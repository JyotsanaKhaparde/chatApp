import React, { Component } from "react";
import DashboardInput from '../components/dashboardinput';
import { Button } from "@material-ui/core";
class Dashboard extends Component
{
    logoutclick = (e) =>
    {
        e.preventDefault();
        window.location.href = "login"
    }
    render()
    {
        return (
            <div>
                <div class="container">
                    <h1 style={{ marginLeft: "437px" }}>Welcome to ChatApp</h1>
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