var React = require('react');
var io = require('socket.io-client');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./parts/header');
var APP = React.createClass({

    getInitialState() {
    	return {
    		status: 'disconnected',
    		title: '',
    		man: 'Yes I\'M'
    	}
    },

	componentWillMount(){
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
		this.socket.on('welcome', this.welcome);
	},

	connect() {
		// alert('Connected: ' + this.socket.id);
		this.setState({ status: 'connected' });
	},

    disconnect() {
    	this.setState({ status: 'disconnected' });
    },

    welcome(serverState) {
    	this.setState({ title: serverState.title });
    },

	render: function() {
		return (
			<div>
				<Header title={this.state.title} status={this.state.status} />
				<RouteHandler {...this.state} />
			</div>
		);
	}
});

module.exports = APP;