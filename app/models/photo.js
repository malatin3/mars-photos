import DS from 'ember-data';

export default DS.Model.extend({
	'camera': DS.belongsTo('camera'),
	'earth_date': DS.attr('date'),
	'img_src': DS.attr('string'),
	'rover': DS.belongsTo('rover'),
	'sol': DS.attr('number')
});
