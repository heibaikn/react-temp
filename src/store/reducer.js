import { createStore } from 'redux'
// import devToolsEnhancer from 'remote-redux-devtools'
import Home from './home'

function counter(state = Home, action) {
  console.log('reducers', action, Home)
  switch (action.type) {
    case 'INCREMENT':
      state.sum = action.payload.content
      return state
    case 'DECREMENT':
      state.sum--
      return state
    default:
      return state
  }
}

let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
