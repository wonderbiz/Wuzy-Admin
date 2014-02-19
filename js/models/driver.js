/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob'
], function(_, Backbone, StackMob) {
    var DriverModel = StackMob.Model.extend({
        schemaName: 'driver'
    });

    return DriverModel;
});
