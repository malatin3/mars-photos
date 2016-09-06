import DS from 'ember-data';

export default DS.Model.extend({
	'name': DS.attr('string'),
	'landing_date': DS.attr('date'),
	'max_sol': DS.attr('number'),
	'max_date': DS.attr('date'),
	'total_photos': DS.attr('number'),
	'cameras': DS.hasMany('camera')
});
