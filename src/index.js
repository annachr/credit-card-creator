import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import rootReducer from './redux/reducers'
import {Provider} from 'react-redux'
import {InputContextProvider} from './inputDataContext'
import { CardThemeContextProvider } from './cardThemeContext'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <CardThemeContextProvider>
        <InputContextProvider>
          <App />
        </InputContextProvider>
        </CardThemeContextProvider>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);


