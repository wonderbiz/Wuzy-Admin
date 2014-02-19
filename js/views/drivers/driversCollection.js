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
    'text!templates/drivers/driversCollection.html',
    'views/drivers/driverItem'
], function($, _, Backbone, Events, StackMob, Vm, driversCollectionTemplate, DriverItemView){

    var DriversList = Backbone.View.extend({
        el: '.drivers-table',

        initialize: function(){

        },

        render: function (){
            this.$el.html(driversCollectionTemplate);
            this.collection.each(function(driver){
                var driverItemView = new DriverItemView({model:driver});
                this.append(driverItemView.render().el);
            }, this.$el.children('.table').children('tbody'));
        }
    });

    return DriversList;
});