import App from './App';
import Op from './container/Op';
import ClassInfo from './container/classInfo';
import UserInfo from './container/userInfo';
import noReview from './container/comments/noReview';
import homeworkReviews from './container/comments/homeworkReviews';
import Demo from './container/demo';
import WeUi from './container/weui';
import Dialog from './container/weUi/dialog';
import Progress from './container/weUi/progress';
import Slider from './container/weUi/slider';

const routes = [{
  path: '/',
  component: App,
  indexRoute: { component: homeworkReviews },
  childRoutes: [
    { path: 'homeworkReviews', component: homeworkReviews },
    { path: 'noReview', component: noReview },
    { path: 'userInfo', component: UserInfo },
    { path: 'op/:id', component: Op },
    { path: 'classInfo/:id', component: ClassInfo },
    { path: 'weui', component: WeUi },
    { path: 'demo', component: Demo },
    { path: 'dialog', component: Dialog },
    { path: 'progress', component: Progress },
    { path: 'slider', component: Slider }
  ]
}];

export default routes;