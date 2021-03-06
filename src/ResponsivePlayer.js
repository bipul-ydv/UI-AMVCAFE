import React from 'react';
import ReactPlayer from 'react-player';
import './responsivePlayer.css';
import Component from 'react';

class ResponsivePlayer extends React.Component{
  render(){
    console.log(this.props.name);
      return (
        <div className='player-wrapper'>
        <div className="">
          <ReactPlayer
            className='react-player'
            url={`http://192.168.0.180:8080/video/stream/mp4/${this.props.name}`}
            // url='https://www.youtube.com/watch?v=iu6n_Xja8mU'
            width='100%'
            height='100%'
            controls={true}
          />
          </div>
        </div>
      )
    }
}
export default ResponsivePlayer;