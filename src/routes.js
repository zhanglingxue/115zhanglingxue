import App from './App';
import Op from './container/Op.js'
import ClassInfo from './container/classInfo'
import UserInfo from './container/userInfo'
// import { indexRoute,childRoutes } from 'react-router'

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: UserInfo },
    childRoutes: [
        { path: 'userInfo', component: UserInfo },
        { path: 'op/:id', component: Op },
        { path: 'classInfo/:id', component: ClassInfo },
    ]
}]

export default routes;