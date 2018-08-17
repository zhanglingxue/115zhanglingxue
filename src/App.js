import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { browserHistory, Router } from 'react-router';
import rootReducer from './reducers';
import serverApi from './middleware/serverapi';
import routes from './routes';

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, serverApi, logger))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
      </Provider>
    );
  }
}

export default App;
