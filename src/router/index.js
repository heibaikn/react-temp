import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import routes from './routes'
import BaseHeader from '../components/BaseHeader'
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
      <div>
        <BaseHeader />
        <Switch>{routeConfig}</Switch>
      </div>
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
