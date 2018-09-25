import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Root from './router'
import Store from './store/reducer'
import $http from './http'
import './global.css'
Component.prototype.$http = $http
// console.log(Component)
// Component.prototype.Gloab = {
//   name: 'kn'
// }

ReactDOM.render(<Root store={Store} />, document.getElementById('root'))
