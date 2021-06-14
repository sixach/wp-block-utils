/**
 * The function to be tested.
 *
 * @ignore
 */
import selectOptions from '../';

describe( "Returns array of objects for valid post objects array with valid property path and no custom 'none' option value", () => {
	test.each( [
		[ [ { id: 1 }, { id: 2 } ], { id: 'value' }, [ { value: '', label: '— Select —' }, { value: 1 }, { value: 2 } ] ],
		[
			[
				{ id: 1, title: 'sunt aut facere' },
				{ id: 2, title: 'qui est esse' },
			],
			{ id: 'value', title: 'label' },
			[
				{ value: '', label: '— Select —' },
				{ value: 1, label: 'sunt aut facere' },
				{ value: 2, label: 'qui est esse' },
			],
		],
		[
			[
				{ id: 1, title: { rendered: 'sunt aut facere' } },
				{ id: 2, title: { rendered: 'qui est esse' } },
			],
			{ id: 'value', 'title.rendered': 'label' },
			[
				{ value: '', label: '— Select —' },
				{ value: 1, label: 'sunt aut facere' },
				{ value: 2, label: 'qui est esse' },
			],
		],
	] )( 'when given %p with path %p it returns %p', ( input, paths, expected ) => {
		expect( selectOptions( input, paths ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns array of objects for valid post objects array with valid property path and empty 'none' option value", () => {
	test.each( [
		[ [ { id: 1 }, { id: 2 } ], { id: 'value' }, { value: '', label: '' }, [ { value: '', label: '' }, { value: 1 }, { value: 2 } ] ],
		[
			[
				{ id: 1, title: { rendered: 'sunt aut facere' } },
				{ id: 2, title: { rendered: 'qui est esse' } },
			],
			{ id: 'value', 'title.rendered': 'label' },
			{ value: '', label: '' },
			[
				{ value: '', label: '' },
				{ value: 1, label: 'sunt aut facere' },
				{ value: 2, label: 'qui est esse' },
			],
		],
	] )( 'when given %p with path %p and none %p it returns %p', ( input, paths, none, expected ) => {
		expect( selectOptions( input, paths, none ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns invalid array of objects for invalid post objects array with valid property path and no custom 'none' option value", () => {
	test.each( [
		[ [], { id: 'value' }, [ { value: '', label: '— Select —' } ] ],
		[ {}, { id: 'value' }, [ { value: '', label: '— Select —' } ] ],
		[ false, { id: 'value' }, [ { value: '', label: '— Select —' } ] ],
		[ true, { id: 'value' }, [ { value: '', label: '— Select —' } ] ],
		[ undefined, { id: 'value' }, [ { value: '', label: '— Select —' } ] ],
		[ null, { id: 'value' }, [ { value: '', label: '— Select —' } ] ],
	] )( 'when given %p with path %p it returns %p', ( input, paths, expected ) => {
		expect( selectOptions( input, paths ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns invalid array of objects with value 'undefined' for valid post objects array with invalid property path and no custom 'none' option value", () => {
	test.each( [
		[ [ { id: 1 } ], { name: 'value' }, [ { value: '', label: '— Select —' }, { value: undefined } ] ],
		[
			[
				{ id: 1, title: { rendered: 'sunt aut facere' } },
				{ id: 2, title: { rendered: 'qui est esse' } },
			],
			{ id: 'value', 'title,rendered': 'label' },
			[
				{ value: '', label: '— Select —' },
				{ value: 1, label: undefined },
				{ value: 2, label: undefined },
			],
		],
	] )( 'when given %p with path %p it returns %p', ( input, paths, expected ) => {
		expect( selectOptions( input, paths ) ).toStrictEqual( expected );
	} );
} );

describe( "Returns empty object for valid post objects array with empty or falseful value path and no custom 'none' option value", () => {
	test.each( [
		[ [ { id: 1 } ], {}, [ { value: '', label: '— Select —' }, {} ] ],
		[ [ { id: 1 } ], [], [ { value: '', label: '— Select —' }, {} ] ],
		[ [ { id: 1 } ], undefined, [ { value: '', label: '— Select —' }, {} ] ],
		[ [ { id: 1 } ], null, [ { value: '', label: '— Select —' }, {} ] ],
		[ [ { id: 1 } ], false, [ { value: '', label: '— Select —' }, {} ] ],
		[ [ { id: 1 } ], true, [ { value: '', label: '— Select —' }, {} ] ],
		[ [ { id: 1 } ], 0, [ { value: '', label: '— Select —' }, {} ] ],
	] )( 'when given %p with path %p it returns %p', ( input, paths, expected ) => {
		expect( selectOptions( input, paths ) ).toStrictEqual( expected );
	} );
} );
