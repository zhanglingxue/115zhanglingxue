import React, { Component } from 'react';
import TodoView from './container/Todo';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { createStore } from 'redux'
import './App.css'

const store = createStore(
    rootReducer,
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
