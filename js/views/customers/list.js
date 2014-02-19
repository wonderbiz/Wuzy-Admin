/**
 * Created by johnpogosyan on 2/9/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/customers/list.html',
    'collections/Customers',
    'views/customers/customersCollection'
], function($, _, Backbone, Events, StackMob, Vm, customersListTemplate, CustomersCollection, CustomersCollectionView){

    var CustomersList = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            var collection = new CustomersCollection();
            collection.fetch({
                success: function(customers) {
                    var customersCollectionView = new CustomersCollectionView({collection : customers});
                    customersCollectionView.render();
                },
                error: function(error){
                    console.log(error);
                }
            });
        },

        render: function (){
            this.$el.html(customersListTemplate);
        }
    });

    return CustomersList;
});