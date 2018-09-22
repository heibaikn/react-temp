import React, { Component } from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './App.scss'

class Auth extends Component {
  render() {
    return (
      <div className="auth">
        <h3>
          <Link to="/">index</Link>
        </h3>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to auth</h1>
        </header>
      </div>
    )
  }
}

export default Auth
