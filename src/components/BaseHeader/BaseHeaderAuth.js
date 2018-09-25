import React, { Component } from 'react'
class BaseHeaderAuth extends Component {
  render() {
    return (
      <div className="user">
        <div className="login">登录</div>
        <div className="register">免费试用</div>
      </div>
    )
  }
}

export default BaseHeaderAuth
