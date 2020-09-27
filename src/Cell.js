import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
    
    render() {
        // let col = this.props.i%2===0 && this.props.j%2===0 ? "white" : "black";
        let col = (this.props.i%2 ===0 && this.props.j%2===0) ||(this.props.i%2 ===1 && this.props.j%2===1) ? "white" : "black";
        
        
        return (
            <button
            
            style={this.props.value1 ?{backgroundColor :col==="white"?"black":"white" } : {backgroundColor:col}} className="cell" onClick = { () =>this.props.click()}>
                <p style={this.props.value1 ?{color :col==="white"?"white":"black" } : {}}>{this.props.value1}<sub>{this.props.value2}</sub></p>
                
            </button>
        )
    }
}
