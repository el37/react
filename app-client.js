var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var APP = require('./component/APP');
var Audience = require('./component/Audience');
var Speaker = require('./component/Speaker');
var Board = require('./component/Board');

var routes = (
	<Route handler={APP}>
		<DefaultRoute handler={Audience} />
		<Route name="speaker" path="speaker" handler={Speaker}></Route>
		<Route name="board" path="board" handler={Board}></Route>
	</Route>
);


Router.run(routes, function(Handler) {
	React.render(
    <Handler />,
    document.getElementById('react-container')
  );
});


/*

error : Module build failed: SyntaxError: Unexpected token 

how to solve :

Add "babel-preset-react"

npm install babel-preset-react
and add "presets" option to babel-loader in your webpack.config.js

(or you can add it to your .babelrc or package.js: http://babeljs.io/docs/usage/babelrc/)

Here is an example webpack.config.js:

{ 
    test: /\.jsx?$/,         // Match both .js and .jsx files
    exclude: /node_modules/, 
    loader: "babel", 
    query:
      {
        presets:['react']
      }
}

*/