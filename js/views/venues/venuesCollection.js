/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/venues/venuesCollection.html',
    'views/venues/venueItem'
], function($, _, Backbone, Events, StackMob, Vm, venuesCollectionTemplate, VenueItemView){

    var VenuesList = Backbone.View.extend({
        el: '.venues-table',

        initialize: function(){

        },

        render: function (){
            this.$el.html(venuesCollectionTemplate);
            this.collection.each(function(venue){
                var venueItemView = new VenueItemView({model:venue});
                this.append(venueItemView.render().el);
            }, this.$el.children('.table').children('tbody'));
        }
    });

    return VenuesList;
});