import React, { Component } from 'react';
import axios from 'axios';

const QUOTE_API = 'https://api.github.com/zen'
class Zenquote extends Component {
  constructor(props){
    super(props);
    this.state={ quote: "" }
  }

  async componentDidMount(){
    try {

      let response = await axios.get(QUOTE_API);
      console.log(response.data)
      this.setState({ quote: response.data })

    } catch (e) {
      console.log(e);
    }

  }


  render(){
    return (
      <div>
        <h1>{this.state.quote}</h1>
      </div>
    )
  }
}

export default Zenquote;