import React, { Component } from 'react'
import Op from './container/Op.js'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),
    )
)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Op />
            </Provider>
        )
    }
}

export default App;
