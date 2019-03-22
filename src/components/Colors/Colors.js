import React, { Component } from 'react';
import './Colors.css';
class Colors extends Component {
    state = {
        colors: 
        [       
            { color: "red", value: "#f00" },
            { color: "green", value: "#0f0" },
            { color: "blue", value: "#00f" },
            { color: "cyan", value: "#0ff" },
            { color: "magenta", value: "#f0f" },
            { color: "yellow", value: "#ff0" },
            { color: "black", value: "#000" }
         ]
    }
   
    changeColor=(index) =>{
      let changedColors=this.state.colors;
      changedColors[index].value='#FFA500';
      this.setState({colors:changedColors});  
    }

 
    removeItem=(index)=>{
        let newColors=this.state.colors;
        newColors.splice(index,1)
        this.setState({colors:newColors});
        console.log('clicked');
    }  
  
  render() {
    let list=this.state.colors.map((item, index)=>(
        <li className="box" style={{backgroundColor:item.value}}>      
            <div  key={index} 
            onClick={()=> this.removeItem(index)}
            className="box">
            </div>
        <p key={index} 
         onClick={()=> this.changeColor(index)}>{item.color}</p>
        </li>
    ))
    
    return (
        <div>
          <h2>Colors</h2>
          <ul className="list"> {list} </ul>
        </div>
    );
  }
}

export default Colors;