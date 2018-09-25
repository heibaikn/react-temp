import React, { Component } from 'react'
class BaseHeaderContact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="icon">
          <img src={require('../../img/icon/header-cellphone.png')} alt="" />
        </div>
        <div className="info">
          <div>快速咨询热线</div>
          <div>010-51118888</div>
        </div>
      </div>
    )
  }
}

export default BaseHeaderContact
