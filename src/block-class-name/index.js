/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { nth, invoke } from 'lodash';

/**
 * Extracts block specific CSS class name generated by Gutenberg editor.
 * By default the block CSS class name is prefixed with `wp-block` keyword.
 *
 * @function
 * @since      1.0.0
 * @param      {string}    classNames    CSS class names assigned to the block.
 * @return     {string}                  CSS class name generated for the block.
 * @example
 *
 * blockClassName( 'wp-block-sixa-spacer custom-class-name test-class-name' );
 *
 * // => string 'wp-block-sixa-spacer'
 */
const blockClassName = ( classNames ) => nth( invoke( classNames, 'match', /wp-block-[^{\s]*/ ) );

export default blockClassName;
