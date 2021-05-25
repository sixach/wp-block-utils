/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { filter, includes, get } from 'lodash';

/**
 * Generates an array of objects to be passed to the react `MultiSelect` component.
 * MultiSelect is a multiple selection dropdown component with `checkboxes`, `search` and `select-all`.
 *
 * @function
 * @since     1.0.0
 * @param     {Array} posts            The response on the API call of array of post objects.
 * @param     {Array} selected         The selected posts.
 * @return    {Array}                  An array of objects containing the label to be shown to the user, and value used to choose the selected value.
 * @example
 *
 * multiSelectItems( [ { "value": 1, "label": "sunt aut facere" }, { "value": 2, "label": "qui est esse" } ], [ 1, 2 ] );
 *
 * // => Array [ { "value": 1, "label": "sunt aut facere" }, { "value": 2, "label": "qui est esse" } ]
 */
const multiSelectItems = ( posts, selected ) => filter( posts, ( post ) => includes( selected, get( post, 'value' ) ) );

export default multiSelectItems;
