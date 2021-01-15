import React, { Component } from 'react'
import './App.css'

export class App extends Component {

  state = {
    span: 0
  }

  plus = () => {
    this.setState({
      span: this.state.span += 1
    })
  }

  moins = () => {
    this.setState({
      span: this.state.span -= 1
    })
  }

  rouge = () => {
    document.querySelector("span").classList.toggle("rouge")
  }

  render() {
    return (
      <div>
        <span>{this.state.span}</span>
        <button onClick={this.plus}>+</button>
        <button onClick={this.moins}>-</button>
        <button onClick={this.rouge}>Color</button>
      </div>
    )
  }
}

export default App
