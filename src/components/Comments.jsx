import React, { Component } from 'react'
import {  Tabs, Tab } from 'react-bootstrap'
import './Comments.scss';

export class Comments extends Component {
    render() {
        return (
            <div className={this.props.className + " Comments"}>
                <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                <Tab eventKey="overview" title="Overview">
                    <Player type="black"></Player>
                </Tab>
                <Tab eventKey="settings" title="Settings">
                    
                </Tab>
                
                </Tabs>
            </div>
        )
    }
}

export class Player extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
