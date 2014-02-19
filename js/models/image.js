/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob'
], function(_, Backbone, StackMob) {
    var ImageModel = StackMob.Model.extend({
        schemaName: 'venue_image',
        binaryFields: ['image']
    });

    return ImageModel;
});
