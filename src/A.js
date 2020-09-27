import React, { Component } from 'react';
import './Chess.css';
import Cell from './Cell';

export default class Chess extends Component {
    state = {
        board:Array(8).fill(null),
        squareRows:Array(8).fill(null),
        row1:"",
        col:"",
        isClick:false
    }

    // renderSquare(i,j) {
    //     return <Cell value={[i,j]} click={this.handleClick}/>;
    //   }
   
   
        
      
    

   handleClick =(i ,j) => {
         
        const board = this.state.board.slice();
        
       
        let row=["a","b","c","d","e","f","g","h"];   
      
        const squareRows = this.state.squareRows.slice();
        board[i] ="X"
        squareRows[j] = row[j]
          
       
     
        this.setState({ 
               board:board,
              squareRows:squareRows  
       });
       console.log(this.state.col);
       console.log(this.state.row1);
     }
     
    
   
   

render(){
 
    let  sq =(j) =>{
        return  this.state.board.map((item ,index1) => {
            
       return(
              <Cell value1={this.state.squareRows[j]} value2={this.state.board[index1]} key={index1}
                click={() => this.handleClick(index1,j)}/>
       )}
);
       }
 let square =  this.state.squareRows.map((item ,index) => {
       
    return(
        <div className="chess" key={index}>
              {sq(index)}
        </div>
    )
})
    return(
        <div className="div">
            {/* {this.renderSquare("a",1)} */}
            {square}
        </div>
    );
}
    
}