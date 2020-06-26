import React, { Component } from 'react'
import './Database.scss'

export default class Database extends Component {
    render() {
        return (
            <div className="Database">
                
                <div className="db-viewer">
                    <div className="db-viewer-description">
                        <h4>#</h4>
                        <h4>White</h4>
                        <h4>Black</h4>
                        <h4>Date</h4>
                        <h4>Event</h4>
                        <h4>Result</h4>
                    </div>
                    <div className="db-viewer-content">
                        <div className="db-line">
                            <p>0</p>
                            <p>Ding Liren</p>
                            <p>Harikrishna Pentala</p>
                            <p>2016.02.29</p>
                            <p>Elite Mind Games</p>
                            <p>1/2-1/2</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
