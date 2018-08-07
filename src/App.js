import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/comments'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import serverApi from './middleware/serverapi'
import { browserHistory,Router } from 'react-router'
import routes from './routes'

const logger = createLogger();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk,serverApi,logger)
    )
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router routes={routes} history={browserHistory}/>
            </Provider>
        )
    }
}

export default App;