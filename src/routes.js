import App from './App';
import Op from './container/Op.js'
import ClassInfo from './container/classInfo'
import UserInfo from './container/userInfo'
import noReview from './container/comments/noReview';

const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: noReview },
    childRoutes: [
        { path: 'noReview', component: noReview },
        { path: 'userInfo', component: UserInfo },
        { path: 'op/:id', component: Op },
        { path: 'classInfo/:id', component: ClassInfo },
    ]
}]

export default routes;