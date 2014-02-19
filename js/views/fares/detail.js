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
    'text!templates/fares/detail.html',
], function($, _, Backbone, Events, StackMob, Vm, fareDetailTemplate){

    var FareDetailView = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            this.model.fetchExpanded(1);
        },

        render: function (){
            this.$el.html(_.template(fareDetailTemplate, {fare: this.model.toJSON()}));
        }
    });

    return FareDetailView;
});