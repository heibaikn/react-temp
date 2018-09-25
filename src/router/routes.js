/** 路由配置 start */
import Home from '../views/home'
import Page1 from '../views/auth'
// console.log(Home)
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

export default routes
