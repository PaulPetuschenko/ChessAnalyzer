import React, { Component } from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'


import './PGNViewer.scss'

export class PGNViewer extends Component {
    render() {
        return (
            <div className="PGNViewer">
                <div className="PGNViewer-content">
                    <div id="PGN">
                        <div className="engine">
                            <div className="rating"><h2>-17</h2></div>
                            <div className="engine-type"><h3>Stockfish</h3></div>
                            <div className="lines">h5+15.Kf1Bxb216.Rb1</div>
                        </div>
                        <div className="moves">

                        </div>
                        <div className="pgn-data">
                            <div className="white"></div>
                            <div className="black"></div>
                        </div>
                    </div>
                    <InputGroup>
                        <Form.Control type="text" placeholder="Type some comments here." />
                        <InputGroup.Append>
                            <Button variant="light">Enter</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="PGNViewer-buttons">
                    <Button variant="dark" ><i className="fas fa-fast-backward"></i></Button>
                    <Button variant="dark" ><i className="fas fa-backward"></i></Button>
                    <Button variant="dark" ><i className="fas fa-play"></i></Button>
                    <Button variant="dark" ><i className="fas fa-forward"></i></Button>
                    <Button variant="dark" ><i className="fas fa-fast-forward"></i></Button>
                </div>
            </div>
        )
    }
}
