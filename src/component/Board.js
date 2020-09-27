import React, { Component } from 'react'

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            pieces: {},
            squares: [],
            rows: [],
            cols: [],
            currentPlayer: 'white',
            moveInProgress: false,
            movingPiece: null,
            validMoves: null,
            notices: {}
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
