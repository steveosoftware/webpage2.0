import React, { Component } from "react";
import Zenquote from "./Zenquote";
import "./Home.scss";
// import { Storage } from 'aws-amplify';

class Home extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = { fileUrl: '' }
  // }

  // componentDidMount(){
  //   Storage.get('s3://keyboardvid/keyboard.mp4').then(data => {
  //     this.setState({ fileUrl: data })
  //   }).catch(err=> {
  //     console.log('error fetching video')
  //   })
  // }

  render() {
    return (
      <div className="Home">
        <div className="Home-video">
          <video
            className="Home-video__content"
            autoPlay
            loop
            muted
            playsinline
          >
            <source
              src="https://keyboardvid.s3.us-east-2.amazonaws.com/keyboard.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <Zenquote />
      </div>
    );
  }
}

export default Home;
