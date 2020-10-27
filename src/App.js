import React, {Component} from 'react'
import axios from 'axios'
import './App.css';
import SimCard from './SimCard';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    clever :[]
    }
  }
  componentDidMount() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(resp => this.setState({clever:resp.data}))
  }
  render() {
    console.log(this.state.clever)
    return (
      <>
      {this.state.clever.map(e => <SimCard {...e}/>)}
      </>
    )
  }
}

export default App;
