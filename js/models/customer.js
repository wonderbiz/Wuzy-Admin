/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob'
], function(_, Backbone, StackMob) {
    var CustomerModel = StackMob.Model.extend({
        schemaName: 'customer'
    });

    return CustomerModel;
});
