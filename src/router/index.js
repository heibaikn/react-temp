import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

/** 路由配置 start */
import Home from '../views/home/index'
import Page1 from '../views/auth/index'

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

const getRouter = () => (
  <Router>
    <div>
      <Switch>{routeConfig}</Switch>
      {/* <Switch>{routeConfig}</Switch> */}
    </div>
  </Router>
)

export default getRouter
// export default routeConfigi
