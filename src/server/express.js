var express = require('express');
var expressServer = express();
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../config/configureStore';
import App from '../components/App/App';
import gameReducer from '../reducers/game';
import gameInitialState from '../states/game';
import Server from 'socket.io';

const port = 3000;


// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);

expressServer.use(webpackDevMiddleware(compiler,
  { noInfo: true, publicPath: webpackConfig.output.publicPath })
);
expressServer.use(webpackHotMiddleware(compiler));

expressServer.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `
}
// Create a new Redux store instance
let store = configureStore('server', {game: gameInitialState});

expressServer.get('/', function (req, res) {
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState));

});


expressServer.get('/login', function (req, res) {
  console.log('213123');
  res.send({status: true});
});

expressServer.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

export default expressServer;