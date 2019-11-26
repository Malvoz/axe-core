const landmarkNoDuplicateContentinfoMetadata = {
	id: 'landmark-no-duplicate-contentinfo',
	selector: 'html',
	tags: ['cat.semantics', 'best-practice'],
	metadata: {
		description: 'Ensures the document has at most one contentinfo landmark',
		help: 'Document must not have more than one contentinfo landmark'
	},
	all: [],
	any: ['page-no-duplicate-contentinfo'],
	none: []
};

export default landmarkNoDuplicateContentinfoMetadata;