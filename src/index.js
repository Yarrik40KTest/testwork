import React from 'react';
import './index.css';
import App from './App';
import Login from './Components/Login'
import todoApp from './reducers'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {watcherSaga} from './saga/Saga'
import { createStore,compose,applyMiddleware  } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from "redux-saga";
import Header from "./Components/Header";



const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    todoApp,
    compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watcherSaga)


render(
    <Provider store={store}>
        <Router>
            <Header/>
            <Switch>
            <Route exact path='/home' component={App}/>
            <Route exact path="/login" component={Login}/>

            <Redirect path="*" to="/login" />
            </Switch>
        </Router>

    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
