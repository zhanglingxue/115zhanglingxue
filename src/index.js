import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Op from './container/Op.js'
import ClassInfo from './container/classInfo'
import UserInfo from './container/userInfo'
import registerServiceWorker from './registerServiceWorker';
import { browserHistory,Router } from 'react-router'


const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: UserInfo },
    childRoutes: [
        { path: 'userInfo', component: UserInfo },
        { path: 'op/123', component: Op },
        { path: 'classInfo/222', component: ClassInfo },
      
    ]
}]

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>
    , document.getElementById('root'));
registerServiceWorker();
