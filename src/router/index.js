import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact
    render={props => <route.component {...props} routes={route.routes} />}
  />
)
const routeConfig = routes.map((route, i) => {
  return <RouteWithSubRoutes key={i} {...route} />
})
// 组装
const getRouter = () => (
  <Router>
    <Switch>{routeConfig}</Switch>
  </Router>
)

export default getRouter
// export default routeConfigi
