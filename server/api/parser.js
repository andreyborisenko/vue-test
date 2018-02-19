const comparers = require('./comparers');

module.exports = ({ text = 'Example. Test? Text!', comparer='default' } ) => {
	if (typeof text != 'string') text = 'Example. Test? Text!'
	
	let sentences = text.split(/[\.\?\!]/).map(s => s.trim()).filter(s => s.length > 0)

	return {
		array: sentences,
		cmp: comparer in comparers ? comparers[comparer] : comparers['default']
	}
}