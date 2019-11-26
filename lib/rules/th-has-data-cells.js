import dataTableMatches from './data-table-matches';

const thHasDataCellsMetadata = {
	id: 'th-has-data-cells',
	selector: 'table',
	matches: dataTableMatches,
	tags: ['cat.tables', 'wcag2a', 'wcag131', 'section508', 'section508.22.g'],
	metadata: {
		description: 'Ensure that each table header in a data table refers to data cells',
		help: 'All th elements and elements with role=columnheader/rowheader must have data cells they describe'
	},
	all: ['th-has-data-cells'],
	any: [],
	none: []
};

export default thHasDataCellsMetadata;