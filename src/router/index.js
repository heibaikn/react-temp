import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/** 路由配置 start */
import Home from '../views/home/index'
import Page1 from '../views/auth/index'
console.log(Home)
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/page1',
    component: Page1
  }
]
/** 路由配置 end */

const routeConfig = routes.map((route, i) => {
  return (
    <Route
      exact
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
      key={i}
    />
  )
})

// 组装

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>{routeConfig}</Switch>
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
