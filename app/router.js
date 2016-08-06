import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType
});

Router.map(function() {
	this.route('application', function() {
		this.route('home', {
		path: '/'
	});
	});
});

export default Router;
