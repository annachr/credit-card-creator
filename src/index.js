import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import rootReducer from './redux/reducers'
import {Provider} from 'react-redux'
import {InputContextProvider} from './inputDataContext'
const store = createStore(rootReducer)

ReactDOM.render(
  <InputContextProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </InputContextProvider>,
  document.getElementById('root')
);


