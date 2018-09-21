import React from 'react'
import ReactDOM from 'react-dom'
import Root from './router'
import Store from './store/reducer'
// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Root store={Store} />, document.getElementById('root'))
// registerServiceWorker()
