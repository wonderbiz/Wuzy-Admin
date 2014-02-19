/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob'
], function(_, Backbone, StackMob) {
    var VenueModel = StackMob.Model.extend({
        schemaName: 'venue'
    });

    return VenueModel;
});
