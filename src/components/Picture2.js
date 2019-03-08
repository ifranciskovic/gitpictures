import React, { Component} from 'react';

import './Picture.css';
class Picture extends Component {
    state={
		imgList: [
			{ "name":"Tesla", "imgSrc":'./images/car1.jpg'},
			{ "name":"Mini", "imgSrc":'./images/car2.jpg'},
			{ "name":"Nissan", "imgSrc":'./images/car3.jpg'},
            { "name":"Audi", "imgSrc":'./images/car4.jpg' },   
		],
        index: 0  
    }

    onclickForward() {
        if(this.state.index+1===this.state.imgList.length) {
        this.setState({
            index: 0
          }) 
        } else {
        this.setState({
            index: this.state.index+1
            }) 
        }
    } 

    onclickBackward() {
        if(this.state.index- 1===-1) {
        this.setState({
            index: this.state.imgList.length -1
          } ) 
        } else {
        this.setState({
            index: this.state.index-1
            }) 
        }
    } 

   

    render () {
        
        return (
            <div className="picture">
                <h3>Galerija fotografija vozila</h3>
                <img src={this.state.imgList[this.state.index]} />
                <div className="picture-button-panel d-flex flex-row">
                        <button className="btn btn-outline-secondary w-100" onClick={this.onclickBackward}>
                         <i className="fas fa-angle-left fa-2x"></i>
                        </button>
                      
                        <button className="btn btn-outline-secondary w-100" onClick={this.onclickForward}>
                            <i className="fas fa-angle-right fa-2x"></i>
                        </button>
                    </div>
                <button onClick={this.onclickBackward}></button>
                <button onClick={this.onclickBackward}></button>
             

            </div>
            
        );
    }
}
export default Picture;