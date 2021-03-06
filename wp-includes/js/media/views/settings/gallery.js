/*globals wp */

/**
 * wp.media.view.Settings.Gallery
 *
 * @class
 * @augments wp.media.view.Settings
 * @augments wp.media.View
 * @augments wp.Backbone.View
 * @augments Backbone.View
 */
var Gallery = wp.media.view.Settings.extend({
	className: 'collection-settings gallery-settings',
	template:  wp.template('gallery-settings')
});

module.exports = Gallery;
