import React, { Component } from 'react'
import BaseHeaderMenu from './BaseHeaderMenu'
import BaseHeaderContact from './BaseHeaderContact'
import BaseHeaderAuth from './BaseHeaderAuth'
import './style.scss'

class BaseHeader extends Component {
  render() {
    return (
      <div className="App-header">
        <header>
          <div className="icon">
            <img src={require('../../img/logo/app-logo.png')} alt="" />
          </div>
          <BaseHeaderMenu />
          <BaseHeaderContact />
          <BaseHeaderAuth />
        </header>
      </div>
    )
  }
}

export default BaseHeader
