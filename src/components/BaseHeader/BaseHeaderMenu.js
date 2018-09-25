import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './style.scss'

class BaseHeaderMenu extends Component {
  constructor() {
    super()
    this.menu = [
      { txt: '首页', to: '/' },
      { txt: '产品', to: '/page1' },
      { txt: '企业类型', to: '' },
      { txt: '帮助', to: '' },
      { txt: '关于', to: '' }
    ]
  }
  getMenuList = () => {
    return this.menu.map((item, key) => (
      <Link to={item.to} key={key}>
        {item.txt}
      </Link>
    ))
  }
  render() {
    return <div className="menu">{this.getMenuList()}</div>
  }
}

export default BaseHeaderMenu
