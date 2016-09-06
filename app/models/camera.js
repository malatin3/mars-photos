import DS from 'ember-data';

export default DS.Model.extend({
	'name': DS.attr('string'),
	'rover_id': DS.attr('string'),
	'full_name': DS.attr('string')
});
