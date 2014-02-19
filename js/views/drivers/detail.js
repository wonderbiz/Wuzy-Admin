/**
 * Created by jpogosyan on 31/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/drivers/detail.html',
], function($, _, Backbone, Events, StackMob, Vm, driverDetailTemplate){

    var DriverDetailView = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            this.model.fetchExpanded(1);
        },

        render: function (){
            this.$el.html(_.template(driverDetailTemplate, {driver: this.model.toJSON()}));
        }
    });

    return DriverDetailView;
});