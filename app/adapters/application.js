import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://api.nasa.gov/mars-photos',
	namespace: 'api/v1/rovers/curiosity',
	apiKey: 'LLSqvfYK5lCcr7hQJMg47lbnp14rVkfYH67aLvic',

	buildURL(modelName, id, snapshot, requestType, query) {
		console.log(query);
		query = typeof query === 'undefined' ? {} : query;
		console.log(query);
		query['api_key'] = this.get('apiKey');
		console.log(query);

		console.log(this._super(modelName, id, snapshot, requestType, query));

		return this._super(modelName, id, snapshot, requestType, query);
	}
});
