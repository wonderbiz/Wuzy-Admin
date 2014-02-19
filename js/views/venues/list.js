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
    'text!templates/venues/list.html',
    'collections/Venues',
    'views/venues/venuesCollection'
], function($, _, Backbone, Events, StackMob, Vm, venuesListTemplate, VenuesCollection, VenuesCollectionView){

    var VenuesList = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            var collection = new VenuesCollection();
            collection.fetch({
                success: function(venues) {
                    var venuesCollectionView = new VenuesCollectionView({collection : venues});
                    venuesCollectionView.render();
                },
                error: function(error){
                    console.log(error);
                }
            });
        },

        render: function (){
            this.$el.html(venuesListTemplate);
        }
    });

    return VenuesList;
});