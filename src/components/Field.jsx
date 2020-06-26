import React from 'react'
import './Field.scss'
import blackQueen from '../svg/pieces/bQueen.svg'
import blackKing from '../svg/pieces/bKing.svg'
import blackKnight from '../svg/pieces/bKnight.svg'
import blackBishop from '../svg/pieces/bBishop.svg'
import blackPawn from '../svg/pieces/bPawn.svg'
import blackRock from '../svg/pieces/bRock.svg'
import whiteBishop from '../svg/pieces/wBishop.svg'
import whiteKing from '../svg/pieces/wKing.svg'
import whiteKnight from '../svg/pieces/wKnight.svg'
import whiteQueen from '../svg/pieces/wQueen.svg'
import whiteRock from '../svg/pieces/wRock.svg'
import whitePawn from '../svg/pieces/wPawn.svg'

var i = 0;
const notationLetter = Array.from( Array(8),_=>String.fromCharCode(i++),i=97)
const notationNumber = Array.from(Array(8), (_,x) => x+1).reverse()

const coords = Array.from(Array(8), (_,x) => x+1).map((el) =>  Array.from(Array(8), (_,x) => x+1).map((s) => el + String(s)))

const themeCl01= "b58863"

const reverseCoords = (coor) => coor.reverse().map((el) => el.reverse())

const initBlackPieces = (coor) => [
    [blackQueen, [1, [coor[0][3] ] ] ],
    [blackKing, [1, [coor[0][4] ] ] ],
    [blackKnight, [2, [coor[0][6], coor[0][1] ] ] ],
    [blackBishop, [2, [coor[0][5], coor[0][2] ] ] ],
    [blackRock, [2, [coor[0][0], coor[0][7] ] ] ],
    [blackPawn, [8, coor[1] ] ],
]

const initWhitePieces = (coor) => [
    [whiteQueen, [1, [coor[0][4] ] ] ],
    [whiteKing, [1, [coor[0][3] ] ] ],
    [whiteKnight, [2, [coor[0][6], coor[0][1] ] ] ],
    [whiteBishop, [2, [coor[0][5], coor[0][2] ] ] ],
    [whiteRock, [2, [coor[0][0], coor[0][7] ] ] ],
    [whitePawn, [8, coor[1] ] ],
]

const imgBoard =
    `%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 264.58 264.58' version='1.1' id='svg8'%3E%3Cdefs id='defs2' /%3E%3Cmetadata id='metadata5'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg style='fill:%23000000;stroke-width:3.02362108' transform='matrix(0.33072928,0,0,0.33072927,-75.565247,172.0864)' id='layer1'%3E%3Cpath style='opacity:1;fill:%23${themeCl01};fill-opacity:1;stroke:%23550000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:0;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill' d='m 228.48067,-420.32447 h 100.00011 v 100.00009 H 228.48067 m 0,100.00011 h 100.00011 v 100.00009 H 228.48067 m 0,100.000102 h 100.00011 v 99.99958 H 228.48067 m 0,100.000098 H 328.48078 V 279.67568 H 228.48067 m 100.00011,-700.00015 h 100.0001 v -99.99959 h -100.0001 z m 100.0001,0 v 100.00009 h 99.99957 v -100.00009 z m 99.99957,0 h 100.00009 v -99.99959 H 528.48045 Z m 100.00009,0 v 100.00009 h 100.00012 v -100.00009 z m 100.00012,0 h 100.00009 v -99.99959 H 728.48066 Z m 100.00009,0 v 100.00009 h 100.00009 v -100.00009 z m 100.00009,0 h 99.99956 v -99.99959 h -99.99956 z m 0,100.00009 v 100.00011 h 99.99956 v -100.00011 z m 0,100.00011 H 828.48075 v 100.00009 h 100.00009 z m 0,100.00009 v 100.000102 h 99.99956 V -120.32418 Z m 0,100.000102 H 828.48075 v 99.99958 h 100.00009 z m 0,99.99958 V 179.6756 h 99.99956 V 79.675502 Z m 0,100.000098 H 828.48075 v 100.00008 h 100.00009 z m -100.00009,0 V 79.675502 H 728.48066 V 179.6756 Z m -100.00009,0 H 628.48054 v 100.00008 h 100.00012 z m -100.00012,0 V 79.675502 H 528.48045 V 179.6756 Z m -100.00009,0 h -99.99957 v 100.00008 h 99.99957 z m -99.99957,0 V 79.675502 H 328.48078 V 179.6756 Z m 0,-100.000098 h 99.99957 v -99.99958 h -99.99957 z m 0,-99.99958 V -120.32418 h -100.0001 v 100.000102 z m 0,-100.000102 h 99.99957 v -100.00009 h -99.99957 z m 0,-100.00009 v -100.00011 h -100.0001 v 100.00011 z m 99.99957,0 H 628.48054 V -320.32438 H 528.48045 Z m 100.00009,0 v 100.00009 h 100.00012 v -100.00009 z m 100.00012,0 H 828.48075 V -320.32438 H 728.48066 Z m 0,100.00009 V -20.324078 H 828.48075 V -120.32418 Z m 0,100.000102 H 628.48054 v 99.99958 h 100.00012 z m -100.00012,0 V -120.32418 H 528.48045 v 100.000102 z' id='rect834' /%3E%3C/g%3E%3C/svg%3E%0A`

export class Field extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            boardSize: 600,
            points: [],
            noPoints: true,
        }
    }

    render() {
        const boardStyle = {
            width: this.state.boardSize + 'px',
            height: this.state.boardSize + 'px',
        }

        const notLet = notationLetter.map((el) => <div key={el+"nl"}>{el}</div>)
        const notNum = notationNumber.map((el) => <div key={el+"nn"}>{el}</div>)

        const onPieceClick = (e) => {
            e.preventDefault()
            this.setState({points: []})

            document.body.addEventListener('click', () => {
                if(!this.state.noPoints){
                    this.setState({points: []})
                    this.setState({noPoints: !this.state.noPoints})
                }
            })

            if (this.state.noPoints){
                this.setState({points: <Point />})
                this.setState({noPoints: !this.state.noPoints})
            }
        }

        return(
            <div className={this.props.className}>
                <div className="field" style={boardStyle} >
                    <Board style={{backgroundImage: `url("data:image/svg+xml;utf8,${imgBoard}")`}} >
                        {initWhitePieces(reverseCoords( coords)).map((el) =>
                            Array.from(Array(el[1][0]), (_,x) =>
                                el[1][1][x]).map((s) =>
                                    <Piece
                                        className={el[0]}
                                        src={el[0]}
                                        style={{gridRow: s[0], gridColumn: s[1]}}
                                        onClick={onPieceClick} />
                                )
                            )
                        }
                        {initBlackPieces(reverseCoords( coords)).map((el) =>
                            Array.from(Array(el[1][0]), (_,x) =>
                                el[1][1][x]).map((s) =>
                                    <Piece
                                        className={el[0]}
                                        src={el[0]}
                                        style={{gridRow: s[0], gridColumn: s[1]}} />
                                )
                            )
                        }
                        {this.state.points}
                    </Board>
                    {/* <Resize /> */}
                    <Notation className="vertical-notation">
                        {notNum}
                    </Notation>
                    <Notation className="horizontal-notation">
                        {notLet}
                    </Notation>
                </div>
            </div>
        )
    }
}

class Point extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            circleColor: "#aeb287"
            
        }
    }

    render() {
        return(
            <div 
                className=" circle"
                
            >
                <svg height="100%" width="100%">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="15"
                        fill={this.state.circleColor}
                    />
                </svg>
            </div>
        )
    }
}

const Piece = (props) => (
    <div
        className={props.className + " piece"}
        style={props.style}
        onClick={props.onClick}
        onDrag={props.onDrag}
    >
        <img
            className="piece-img"
            alt={props.alt}
            src={props.src}
        />
    </div>
)

const Notation = (props) => (
    <div className={props.className + " notation"}>{props.children}</div>
)

const Board = (props) => (
    <div className={props.className + " board"} style={props.style} >{props.children}</div>
)