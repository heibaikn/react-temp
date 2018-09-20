import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to auth</h1>
        </header>
      </div>
    )
  }
}

export default Auth
