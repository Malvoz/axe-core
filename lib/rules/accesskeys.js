const accesskeysMetadata = {
	id: 'accesskeys',
	selector: '[accesskey]',
	excludeHidden: false,
	tags: ['best-practice', 'cat.keyboard'],
	metadata: {
		description: 'Ensures every accesskey attribute value is unique',
		help: 'accesskey attribute value must be unique'
	},
	all: [],
	any: [],
	none: ['accesskeys']
};

export default accesskeysMetadata;