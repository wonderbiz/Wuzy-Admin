/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob',
    'models/Venue'
], function(_, Backbone, StackMob, VenueModel) {
    var VenueModel = StackMob.Collection.extend({
        model: VenueModel
    });

    return VenueModel;
});