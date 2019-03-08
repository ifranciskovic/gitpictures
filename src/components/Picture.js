import React, { Component} from 'react';

import './Picture.css';
class Picture extends Component {
    constructor(props) {
        super();

        const img1 =require('./images/car1.jpg');
        const img2 =require('./images/car2.jpg');
        const img3 =require('./images/car3.jpg');        
        const img4 =require('./images/car4.jpg');




        this.state = {
            index: 0,
            imgList: [img1, img2, img3, img4]
        };

        this.onclickForward = this.onclickForward.bind(this);
        this.onclickBackward = this.onclickBackward.bind(this);
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
                <h2>Galerija fotografija vozila</h2>
                <img src={this.state.imgList[this.state.index]} alt="" />
                <div className="picture-button-panel d-flex flex-row">
                        <button className="btn btn-outline-secondary w-100" onClick={this.onclickBackward}>
                         <i className="fas fa-angle-left fa-2x"></i>
                        </button>
                        <button className="btn btn-outline-secondary w-100" onClick={this.onclickForward}>
                            <i className="fas fa-angle-right fa-2x"></i>
                        </button>
                    </div>
            </div>
            
        );
    }
}
export default Picture;