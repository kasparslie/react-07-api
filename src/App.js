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
  getQuote =() =>{
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(resp => this.setState({clever:resp.data}))
  }

  componentDidMount() {
    this.getQuote()
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.getQuote()
  }
  render() {
    console.log(this.state.clever)
    return (
      <>
      {this.state.clever.map(e => <SimCard key={e.character} {...e}/>)}
      </>
    )
  }
}

export default App;
