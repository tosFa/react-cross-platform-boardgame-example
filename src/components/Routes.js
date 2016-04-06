'use strict';



import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
import App from './App/App';
import Game from './Game/Game';
import Login from './Login/Login';


const routes = (
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={Login}/>
      <Route path="game" component={Game}/>
    </Route>
  </Router>
);



export default class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>{routes}</Router>
    );
  }
}