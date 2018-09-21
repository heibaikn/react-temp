import React from 'react'
import ReactDOM from 'react-dom'
import Root from './router'
import Store from './store/reducer'
// import registerServiceWorker from './registerServiceWorker'

// import { Provider } from 'react-redux'
// import Root from './views/home/index'
// import Data from './views/home/show'

ReactDOM.render(<Root store={Store} />, document.getElementById('root'))
// ReactDOM.render(
//   <Provider store={Store}>
//     <div>
//       <Root />
//       <Data />
//     </div>
//   </Provider>,
//   document.getElementById('root')
// )
// registerServiceWorker()
