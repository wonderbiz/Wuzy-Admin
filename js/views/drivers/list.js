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
    'text!templates/drivers/list.html',
    'collections/Drivers',
    'views/drivers/driversCollection'
], function($, _, Backbone, Events, StackMob, Vm, driversListTemplate, DriversCollection, DriversCollectionView){

    var DriversList = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            var collection = new DriversCollection();
            collection.fetch({
                success: function(drivers) {
                    var driversCollectionView = new DriversCollectionView({collection : drivers});
                    driversCollectionView.render();
                },
                error: function(error){
                    console.log(error);
                }
            });
        },

        render: function (){
            this.$el.html(driversListTemplate);
        }
    });

    return DriversList;
});