/**
 * Created by frimoldi on 31/01/14.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'events',
    'wuzy-stackmob',
    'vm',
    'text!templates/venues/detail.html',
], function($, _, Backbone, Events, StackMob, Vm, venueDetailTemplate){

    var VenueDetailView = Backbone.View.extend({
        el: '.page',

        initialize: function(){
            this.model.fetchExpanded(1);
        },

        render: function (){
            this.$el.html(_.template(venueDetailTemplate, {venue: this.model.toJSON()}));
        }
    });

    return VenueDetailView;
});