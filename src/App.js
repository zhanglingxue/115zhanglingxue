import React, { Component } from 'react'
import TodoView from './container/Todo'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import './App.css'

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
                <TodoView />
            </Provider>
        )
    }
}

export default App;
