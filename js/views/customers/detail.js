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
    'text!templates/customers/detail.html',
], function ($, _, Backbone, Events, StackMob, Vm, customerDetailTemplate) {

    var CustomerDetailView = Backbone.View.extend({
        el: '.page',

        initialize: function () {
            this.model.fetchExpanded(1);
        },

        render: function () {
          
                this.$el.html(_.template(customerDetailTemplate, { customer: this.model.toJSON() }));
           
        }
    });

    return CustomerDetailView;
});