import { createStore } from 'redux'
// import devToolsEnhancer from 'remote-redux-devtools'
import { combineReducers } from 'redux'
import Home from './home'

function counter(state = Home, action) {
  const count = state.count
  // console.log(action, state)
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}

let store = createStore(
  combineReducers({ counter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
