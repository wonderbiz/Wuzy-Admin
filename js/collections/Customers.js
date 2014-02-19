/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob',
    'models/Customer'
], function(_, Backbone, StackMob, CustomerModel) {
    var CustomerModel = StackMob.Collection.extend({
        model: CustomerModel
    });

    return CustomerModel;
});