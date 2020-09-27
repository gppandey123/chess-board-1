import React, { Component } from 'react';
import './Chess.css';
import Cell from './Cell';

export default class Chess extends Component {
    state = {
       
        A:[...Array(8).keys()],
        B:[...Array(8).keys()],
       
        D:""
       
    }

   handleClick =(val ) => {
         
       
       
       
        let row=["a","b","c","d","e","f","g","h"];
        
        this.setState({ 
           
            
            D:val,
            
       });
       console.log(this.state.col1);
       console.log(this.state.row1);
     }
    
render(){

let row=["a","b","c","d","e","f","g","h"];
  let sq = this.state.A.map((item , index) => {
      return(
          <div key={index}>
                {this.state.B.map((item1,i) => {
                    return(
                        <Cell i={index} j={i} value1={this.state.D===`${row[index]}${index}${i}`?this.state.D:''}  key={i}
                         click={() => this.handleClick(`${row[index]}${index}${i}`)}/>
                    )
                })}
          </div>
      )
  })

    return(
        <div className="div">
           
            {sq}
        </div>
    );
}
    
}