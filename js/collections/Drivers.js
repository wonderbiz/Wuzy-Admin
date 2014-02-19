/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob',
    'models/Driver'
], function(_, Backbone, StackMob, DriverModel) {
    var DriverModel = StackMob.Collection.extend({
        model: DriverModel
    });

    return DriverModel;
});