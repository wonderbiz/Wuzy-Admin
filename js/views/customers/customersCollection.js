/**
 * Created by johnpogosyan on 2/10/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/customers/customersCollection.html',
    'views/customers/customerItem'
], function($, _, Backbone, Events, StackMob, Vm, customersCollectionTemplate, CustomerItemView){

    var CustomersList = Backbone.View.extend({
        el: '.customers-table',

        initialize: function(){

        },

        render: function (){
            this.$el.html(customersCollectionTemplate);
            this.collection.each(function(customer){
                var customerItemView = new CustomerItemView({model:customer});
                this.append(customerItemView.render().el);
            }, this.$el.children('.table').children('tbody'));
        }
    });

    return CustomersList;
});