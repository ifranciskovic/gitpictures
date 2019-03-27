import React, { Component} from 'react';
import photo from './images/8.jpg';
import './Photo.css';
class Photo extends Component {
    state={
        style:{ borderRadius: '0px', 
                opacity: '1', 
                transform: 'scaleX(1)'},
        buttonTitle1:'Round photo',
        buttonTitle2:'Transparent photo',
        buttonTitle3:'Flip photo'
      }


      
    roundPhoto=() =>{
        if (this.state.buttonTitle1==='Round photo') {
        this.setState({style:{borderRadius: '50%'}})
        this.setState({buttonTitle1:'Change to square'})
        } 
        if (this.state.buttonTitle1==='Change to square') {
        this.setState({style:{borderRadius: '0px'}})
        this.setState({buttonTitle1:'Round photo'})
        }
    }
    transparentPhoto=() => {
        if (this.state.buttonTitle2==='Transparent photo') {
        this.setState({style:{ opacity: '0.5' }})
        this.setState({buttonTitle2:'Original opacity'})
    } 
    if (this.state.buttonTitle2==='Original opacity') {
        this.setState({style:{ opacity: '1'}})
        this.setState({buttonTitle2:'Transparent photo'})
        }
    }
    flipPhoto=() => {
        if (this.state.buttonTitle3==='Flip photo') {
        this.setState({style:{ transform: 'scaleX(-1)'}})
        this.setState({buttonTitle3:'Flip back'})
    } 
    if (this.state.buttonTitle3==='Flip back') {
        this.setState({style:{ transform: 'scaleX(1)'}})
        this.setState({buttonTitle3:'Flip photo'})
        }
    }
    render () {
        return (
            <div className="photo">
                <h2>Photo</h2>
                <div className="photoCard">
                    <img src={photo} style={this.state.style} alt="" />
                    <h5>Spring cherry blossom</h5>
                </div>
                <div className="photo-button-panel d-flex flex-row">
                   <button className="btn btn-outline-secondary w-100" onClick={this.roundPhoto}>
                        {this.state.buttonTitle1}
                    </button> 
                    <button className="btn btn-outline-secondary w-100" onClick={this.transparentPhoto}>
                      {this.state.buttonTitle2}
                    </button> 
                    <button className="btn btn-outline-secondary w-100" onClick={this.flipPhoto}>
                        {this.state.buttonTitle3}
                    </button> 
                </div>
            </div>
        );
    }
}
export default Photo;