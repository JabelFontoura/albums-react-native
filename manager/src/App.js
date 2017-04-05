import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDGJ_Uv98mLGAXDK4ExTMqxZ4y6XlNUZAI',
      authDomain: 'manager-5f309.firebaseapp.com',
      databaseURL: 'https://manager-5f309.firebaseio.com',
      storageBucket: 'manager-5f309.appspot.com',
      messagingSenderId: '455742174479'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
