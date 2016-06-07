import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReducersSample from './reducers'
import App from './components/App'

let store = createStore(ReducersSample)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('tabSample')
)