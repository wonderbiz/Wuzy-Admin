/**
 * Created by johnpogosyan on 2/11/14.
 */
define([
    'lodash',
    'backbone',
    'wuzy-stackmob',
    'models/Fare'
], function(_, Backbone, StackMob, FareModel) {
    var FareModel = StackMob.Collection.extend({
        model: FareModel
    });

    return FareModel;
});