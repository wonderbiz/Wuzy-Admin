/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob'
], function(_, Backbone, StackMob) {
    var FareModel = StackMob.Model.extend({
        schemaName: 'ride_receipt'
    });

    return FareModel;
});
